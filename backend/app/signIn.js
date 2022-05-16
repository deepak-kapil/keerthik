import mongoose from "mongoose";


let Schema=mongoose.Schema;


let SignInSchema= new Schema({
    "userName":{type :String, default:""}, 
    "email":{type :String,default:"" },
    "password":{type:String,default:""},
    "addedOn":{type :Number, default:Date.now()}
})

SignInSchema.method({
    saveSignInDetails: function (){
        return this.save();
    },
    getUser:  function (findObject) {
        let result= this.findOne(findObject);
        console.log(result);
        return result
    },
})

export default mongoose.model("user-signin",SignInSchema)