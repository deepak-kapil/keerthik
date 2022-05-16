
import Config from './index.cjs'
import mongoose  from "mongoose"

export default class DbConnection{
    static connect (){
        console.log("DB trying to connect on " + new Date() + "to url " + Config.DB)
    const options ={
        KeepAlive:true,
        // autoReconnect:true,
        // poolSize:10,
        useNewUrlParser:true,
        UseUnifiedTopology:true
    }
    return mongoose.connect(Config.DB,options)
    }
}