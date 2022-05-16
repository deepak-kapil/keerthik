import Utils from "../../utils/index.js";
import signInModel from "../../models/signIn.js";
import Parser from "../../utils/index.js";

export default class UserManager {
    async addUser(request) {
        console.log("request from manager",request);
        if (!request)
            return Utils.returnRejection("Bad Request", "forbidden")

        let userObject = new signInModel()
        console.log("userObject",userObject)
        userObject = Parser.parseAddUserObject(userObject, request)
        console.log("userObject and",userObject,"requestData",request)
        let responseSignIn= await userObject.saveSignInDetails()
        console.log("res to be return",responseSignIn);
        if(!responseSignIn)
            return `error ${responseSignIn}`
        return responseSignIn
    }
}