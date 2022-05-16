import Utils from "../../utils/index.js";
import SignInSchema from "../../models/signIn.js";
import jwt from 'jsonwebtoken';

export default class LoginManager {
    async LoginUser(request) {
        
        console.log("incoming request ", request)
        if (!request) {
            return Utils.returnRejection("Bad Request", "forbidden")
        }
        let { email, password } = request
        console.log("incoming request email password ", request,email,password)
        
    let resg_user=new SignInSchema()
        // let registerd_user =   SignInSchema.getUser({ "email":new RegExp('^'+email+'$', "i") })
        let registerd_user={}
        let validate=await SignInSchema.findOne({email: email}).then((data)=>{
            console.log("data",data);
            registerd_user=data
        }).catch((err)=>{
            console.log(err);
        })
        let validated_user_obj=registerd_user.toObject()
        console.log("new_onj",validated_user_obj);
       

        if (password === validated_user_obj.password) {

            let token = jwt.sign(
                { user_id: validated_user_obj._id, email },
                'qwerty',
                {
                    expiresIn: "2h",
                }
            );
            console.log(token);
            let response={
                useName:validated_user_obj.userName,
                token:"Bearer "+ token

            }
            return response;

        }
        else {

           
            let msg="email and password does'nt match"
           
            
            return Promise.reject({message: msg});

        }
    }
}