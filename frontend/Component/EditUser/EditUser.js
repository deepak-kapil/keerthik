import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";


const EditUser = (props) => {

    const [users, setUser] = useState({});
    const { email, name, phone, age } = users;
    let history = useHistory()





    useEffect(() => { 
        loadUsers();
    },[])


    const loadUsers = async () => {
        const result = await Axios.get(`http://localhost:9000/register/mongo/${props.match.params._id}`,{
            headers: {
                Authorization:`${localStorage.getItem('token')}`,
            }
        });
        setUser(result.data)

        console.log(result);
    }

    const validate = (e) => {

        // let phone1 = e.target.value
        //let l=phone1.length
        //let x=Math.max(l)

        //if (x===10 ){

        setUser({ ...users, [e.target.name]: e.target.value });


        //} 
    }



    const register = (e) => {

        e.preventDefault()
        let len = users.phone.length
        if (users.email === "" || users.name === "" || users.phone === '' || users.age === '') {
            alert('all feilds are required')

        }
        else if (len !== 10) {
            alert('phone should be of 10 digits')


        }
        else {


            Axios.patch(`http://localhost:9000/register/mongo/${props.match.params._id}`, users)
                .then((response) => {
                    console.log(response);


                })
            history.push('/List')

        }
    }










    return (
        <div>

            <form onSubmit={register}>
                <div className='form-group row'>
                    <label htmlFor='email' className="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Email"
                            value={email}
                            name='email'
                            onChange={e => validate(e)}


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
                            value={name}
                            placeholder="Name"
                            onChange={e => validate(e)}>
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
                            value={phone}
                            name='phone'
                            onChange={e => validate(e)}>
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
                            value={age}
                            name='age'
                            onChange={e => validate(e)}>
                        </input>
                    </div>
                </div>



                <div>
                    <button type='submit' className='btn btn-info' onClick={register}>Update</button>
                </div>

            </form>
        </div>
    );
};

export default EditUser;