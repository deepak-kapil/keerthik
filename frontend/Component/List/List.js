import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';



const List = () => {
    const [users, setUser] = useState([]);
    useEffect(() => { 
        loadUsers();
    },[])

    
    const loadUsers = async () => {
        const result = await Axios.get('http://localhost:9000/register/mongo',{
            headers: {
                Authorization:`${localStorage.getItem('token')}`,
            }
        });
        setUser(result.data.reverse())

    } 
    // const loadUsers = async () => {
    //     const result = await Axios.get('http://127.0.0.1:8000/');
    //     console.log(result,"resul");
    //      setUser(result.data.payload.reverse())

    // }

    const deleteUser=async _id=>{
        await Axios.delete(`http://localhost:9000/register/mongo/${_id}`)
        loadUsers();
    }


    return (

        <div className='container'>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Age</th>
                        <th scope='col'>Action</th>

                    </tr>
                </thead>
                <tbody>
                    
                        {users.map((user, index) => 
                             {
                                 return(

                                <tr>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link className='btn btn-primary' to={`/EditUser/EditUser/${user._id}`}>update</Link>
                                        <Link className='btn btn-outline-primary' onClick={()=>{deleteUser(user._id)}}>delete</Link>
                                    </td>
                                </tr>
                                 )
                             }
                            
                        


                        )}
                    

                </tbody>
            </table>



        </div>
    );
};

export default List;