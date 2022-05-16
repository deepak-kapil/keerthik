import Utils from "../../utils/index.js";
import LoginManager from "./login.js"

export default class LoginController {
    async LoginUser(req, res) {
        console.log("LoginUser Incoming request from controller", req.body);
        let [err, response] = await Utils.parseResponse(new LoginManager().LoginUser(req.body))
        if (err || !response){
            console.log(err);
            return res.status(400).send({error:err})
        }
           


        console.log(response);
        return Utils.response_without_header(res, response, "user has been logged successfully")

    }
}