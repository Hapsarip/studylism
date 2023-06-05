import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { axiosInstance, toastifyConfig, URI } from "../component/component-config";
import "react-toastify/dist/ReactToastify.css"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [_, setCookies] = useCookies(["access_token"])
    const navigate = useNavigate(); // get the navigate function
    
    const onSubmit = async (event) => {
        event.preventDefault();
        // try {
        //     const response = await axios.post('http://localhost:3001/auth/login', { email, password });
        //     setCookies("access_token", response.data.token);
        //     window.localStorage.setItem("userID", response.data.userID);
        //     navigate("/");
        // } catch (err) {
        //     console.error(err);
        // }
        try{
            const res = await axiosInstance.post("http://localhost:3001/auth/login",  
                {
                    email: email,
                    password: password
                })
            console.log(res.data.userID);
            console.log(res.data.name);
            console.log(res.data.learningStyle);
            setCookies("access_token", res.data.token);
            window.localStorage.setItem("userID", res.data.userID);
            window.localStorage.setItem("name", res.data.name);
            window.localStorage.setItem("learningStyle", res.data.learningStyle);
            toast(res.data.message);
            navigate("/")
            
        } catch (err) {
            console.error(err.response.data.message);
            toast.error(err.response.data.message)
        }
    };
    
    return(
        <div className='signup-container'>
            <ToastContainer />
            <div className='grid h-screen place-items-center'>
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-center'>
                        <h1 className='text-4xl m-6 mx-20 '>Welcome Back!</h1>
                    </div>
                    <div className='bg-gradient-to-r from-blue to-bluelight rounded-3xl p-6 px-10 justify-center'>
                        <form onSubmit={onSubmit} className='flex flex-col'>
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
                                <button type='submit' className='w-40 bg-yellow p-2 rounded-full text-white hover:text-black'>
                                    Login
                                </button>
                            </div>
                            <div className='flex flex-row justify-center text-white'>
                                <p>Don't have an account? <a href='/signup'><u className='hover:text-black'>Sign Up</u></a> here</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}