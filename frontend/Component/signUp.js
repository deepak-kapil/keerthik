import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import axios from "axios";
class signUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: '',
            password: '',

        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()




        await axios.post('http://localhost:3002/signin', this.state)
            .then(res => {
                console.log(res);
                this.setState({ res: res })



            })
            .catch(err => {
                console.log(err, 'error logged');

            })

    }








    render() {
        return (<div className='container'>
            <form>
                <div className="mb-3">
                    <label  className="form-label">User name</label>
                    <input  className="form-control"  value={this.state.userName} onChange={(e) => (this.setState({ userName: e.target.value }))} />
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={this.state.email} onChange={(e) => (this.setState({ email: e.target.value }))} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={this.state.value} onChange={(e) => (this.setState({ password: e.target.value }))} id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign-Up</button>
                <div> {this.state.res}</div>
            </form>

            {/* <button type="button" class="btn btn-primary">List</button> */}
            <NavLink className="nav-link" exact to="/login">Login</NavLink>


        </div>)
    }
}

export default signUp;