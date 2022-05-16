import React, { useState, Component } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import Redirect from "../Redirect";




const Login = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
        token: ''
    })

    let history=useHistory()


    const onLogin = () => {

        return axios.post('http://localhost:3002/login', state)

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        onLogin()
            .then(res => {
                debugger
                console.log(res);
                
                localStorage.setItem('token', res.data.responseData.token)
               
                history.push("/Greet")



            })
            .catch(err => {
                console.log(err, 'error logged');
                alert("Email and Password does'nt match")

            })

        if (localStorage.getItem("token")) {

            history.push("/Greet")

        }



    }



    const handleChange = (e) => {
        debugger



        setState({ ...state, [e.target.name]: e.target.value })


    }
    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={state.email} name="email" onChange={handleChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={state.password} name="password" onChange={handleChange} id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                <div> {state.res}</div>
            </form>

            {/* <button type="button" class="btn btn-primary">List</button> */}
            <NavLink className="nav-link" exact to="/">Sign-Up</NavLink>


        </div>
    )

}



// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//             token: ''
//         }
//     }


//     handleSubmit = async () => {




//         await Axios.post('http://localhost:9000/login', this.state)
//             .then(res => {
//                 debugger
//                 console.log(res);
//                 this.setState({ token: res.data.token })
//                 localStorage.setItem('token', res.data.token)
//                 let save = 'Save'
//                 if (res.data.token) {

//                     // <Redirect path={save}/>

//                     // window.location.href='/Save'





//                 }



//             })
//             .catch(err => {
//                 console.log(err, 'error logged');

//             })



//     }








//     render() {

//         return (
//         <div className='container'>
//             <form>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                     <input type="email" className="form-control" id="exampleInputEmail1" value={this.state.email} onChange={(e) => (this.setState({ email: e.target.value }))} aria-describedby="emailHelp" />
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                     <input type="password" className="form-control" value={this.state.value} onChange={(e) => (this.setState({ password: e.target.value }))} id="exampleInputPassword1" />
//                 </div>

//                 <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
//                 <div> {this.state.res}</div>
//             </form>

//             {/* <button type="button" class="btn btn-primary">List</button> */}
//             <NavLink className="nav-link" exact to="/">Sign-Up</NavLink>


//         </div>
//         )
//     }
// }

export default Login;