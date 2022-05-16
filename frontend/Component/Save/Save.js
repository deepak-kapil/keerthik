import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";




function Save() {

  let history = useHistory()

  const [users, setUser] = useState({
    email: '',
    name: "",
    phone: "",
    age: ""
  });

  const validate = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });

  }

  


  const register = (e) => {

    e.preventDefault()
    let len=users.phone.length
    if (users.email === "" || users.name === "" || users.phone === '' || users.age === '') {
      alert('all feilds are required')
      
    }
    else if(len!==10)
    {
      alert('phone should be of 10 digits')
      

    }
    
    else {
      Axios.post('http://localhost:9000/register/mongo', users,{
        headers:{
          authorization:`${localStorage.getItem('token')}`
        }
      })
        .then((response) => {
          console.log(response);

        })
      history.push('/Greet')
     



    }
    // else {
    //   Axios.post('http://127.0.0.1:8000/save', users)
    //     .then((response) => {
    //       console.log(response);

    //     })
    //   history.push('/Greet')
     



    // }

  }


  return (
    <div>

      <form onSubmit= {register}>
        <div className='form-group row'>
          <label htmlFor='email' className="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
              value={users.email}
              name='email'
              onChange={(e) => validate(e)}
            >

            </input>
          </div>
        </div>


        <div className='form-group row'>
          <label htmlFor='name' className="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input
              type='text'
              class="form-control"
              name='name'
              id='name'
              value={users.name}
              placeholder="Name"
              onChange={(e) => validate(e)}
            >
            </input>
          </div>
        </div>


        <div className='form-group row'>
          <label htmlFor='phone' className="col-sm-2 col-form-label">Phone</label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="phone"
              placeholder="phone"
              value={users.phone}
              name='phone'
              onChange={(e) => validate(e)}
            >
            </input>
          </div>
        </div>

        <div className='form-group row'>
          <label htmlFor='age' className="col-sm-2 col-form-label">Age</label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="age"
              placeholder="age"
              value={users.age}
              name='age'
              onChange={(e) => validate(e)}
            >
            </input>
          </div>
        </div>



        <div>
          <button type='submit' className='btn btn-info' onClick={register}>Save</button>
        </div>

      </form>
    </div>
  );
}

export default Save;