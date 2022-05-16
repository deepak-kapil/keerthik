import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'


function Express_APP (app){
    app.use(cors())
    //logs incoming request with endpoints and response time 
    app.use(morgan(':method :url :response-time'))
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded(({extende:true})))
    app.use(bodyParser.json())
    // parse applicant/json
    
}
export default Express_APP