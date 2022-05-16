import APP from 'express'
import Config from "./config/index.cjs"
import DbConnection from './config/dbConnections.js'
import Express_APP  from './config/express.js'
import Routes from './routes/index.js'


const app=new APP()
Express_APP(app)
class Server{
    static listen(){
        Promise.all([DbConnection.connect()]).then(()=>{
            app.listen(Config.PORT)
            console.log(`server started at port ${Config.PORT}`)
            Routes(app)

            
        }).catch(error=>{console.log(error);})
    }
}

Server.listen()