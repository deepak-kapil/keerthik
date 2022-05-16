
import './App.css';
import Save from './Component/Save/Save';
import Greet from './Component/Greet/Greet';
import List from './Component/List/List';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditUser from './Component/EditUser/EditUser';
import signUp from "./Component/signUp";
import Login from "./Component/login"


function App() {

  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={signUp} />
          <Route exact path='/login' component={Login} />
          
          
          <Route exact path='/Greet' component={Greet} />
         
         
        </Switch>




      </Router>
    </div>
  );
}

export default App;
