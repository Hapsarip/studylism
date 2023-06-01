import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { axiosInstance, toastifyConfig, URI } from "../component/component-config";
import "react-toastify/dist/ReactToastify.css"

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate(); // get the navigate function
    
    const onSubmit = async (event) => {
        event.preventDefault();
        // try {
        //     const response = await axios.post('http://localhost:3001/auth/register', { name, email, password });
        //     console.log(response); // TODO: Don't forget to comment this line
        //     // console.log(response.status);
        //     // if(response.status==201){
        //     //     alert(response.data.message)
        //     //     navigate("/login");
        //     // } else if(response.status==401) {
        //     //     alert("wadidwa")
        //     // }
        //     axios.interceptors.response.use(function (response) {
        //         // Any status code that lie within the range of 2xx cause this function to trigger
        //         // Do something with response data
        //         if(response.status==201){
        //             alert(response.data.message)
        //             //     navigate("/login")
        //         }
        //         return response;
        //       }, function (error) {
        //         // **** Any status codes that falls outside the range of 2xx cause this function to trigger **** <====
        //         // Do something with response error
        //         if(error.response.status==401){
        //                 alert(error.response.data.message)
        //                 toast.error(error.response.data.error, toastifyConfig)
        //             //     navigate("/login")
        //         }
        //         return Promise.reject(error);
        //       });
        // } catch (err) {
        //     console.error(err);
        // }
        try{
            const res = await axiosInstance.post("http://localhost:3001/auth/register",  
                {
                    name: name,
                    email: email,
                    password: password
                })
            console.log(res.data.message);
            toast(res.data.message);
            navigate("/login")
            
        } catch (err) {
            console.error(err.response.data.message);
            toast.error(err.response.data.message)
        }
    };

    return(
        <div>
            <ToastContainer />
            <div className='signup-container'>
                <div className='grid h-screen place-items-center'>
                    <div>
                        <h1 className='text-4xl m-6 mx-12'>Create Your Account!</h1>
                        <div className='bg-gradient-to-r from-blue to-bluelight rounded-3xl p-6 px-10 justify-center'>
                            <form onSubmit={onSubmit} className='flex flex-col'>
                                <div className='form-group flex flex-col p-3'>
                                    <label htmlFor='name' className='text-white flex-1'>Name</label>
                                    <input 
                                        type='text' 
                                        id='name' 
                                        required
                                        className='flex-1 p-1 rounded px-3'
                                        value={name}
                                        placeholder='Enter your name!'
                                        onChange={(event) => setName(event.target.value)}></input>
                                </div>
                                <div className='form-group flex flex-col p-3'>
                                    <label htmlFor='email' className='text-white'>Email</label>
                                    <input 
                                        type='text' 
                                        id='email' 
                                        required
                                        className='flex-1 p-1 px-3 rounded'
                                        value={email}
                                        placeholder='Enter your email!'
                                        onChange={(event) => setEmail(event.target.value)}></input>
                                </div>
                                <div className='form-group flex flex-col p-3'>
                                    <label htmlFor='password' className='text-white'>Password</label>
                                    <input 
                                        type='password' 
                                        id='password' 
                                        required
                                        className='flex-1 p-1 rounded px-3'
                                        value={password}
                                        placeholder='Enter your password!'
                                        onChange={(event) => setPassword(event.target.value)}></input>
                                </div>
                                <div className='flex flex-row justify-center m-5'>
                                    <button type='submit' className='w-40 bg-yellow p-2 rounded-full text-white'>
                                        Sign Up
                                    </button>
                                </div>
                                <div className='flex flex-row justify-center text-white'>
                                    <p>Already have an account? <a href='/login'><u>Login</u></a> here</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}