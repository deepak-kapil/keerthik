import Utils from "../../utils/index.js";
import UserManager from "./signIn.js"

export default class SiginController {
    async addUser (req,res){

        console.log("addUser Incoming request from controller",req.body);
        let [err,response]= await Utils.parseResponse(new UserManager().addUser(req.body))
        console.log("response to be return",response);
        if(err || !response)
            return err
        return Utils.response(res,response,"user has been added successfully",true,200)
    }
    
}