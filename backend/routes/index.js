// let SiginController =require("../app/modules/sigIn")
import SiginController from"../app/modules/sigIn/index.js"
import LoginController from "../app/modules/login/index.js"
import bcrypt from "bcrypt"

const Routes= (app)=>{

    app.post("/signin" ,new SiginController().addUser)
    app.post("/login" ,new LoginController().LoginUser)
    // app.post("/signin",  (req, res) => {

    //     // Our login logic starts here
    //     console.log("req body",req.body,req)
    //     // Our register logic ends here
    // });

}
export default Routes