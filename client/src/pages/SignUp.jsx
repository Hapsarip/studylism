import React, { useState } from 'react';

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className='login-container'>
            <form>
                <h2>Create Your Account!</h2>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text' 
                        id='name' 
                        value={name}
                        onChange={(event) => setName(event.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='text' 
                        id='email' 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}></input>
                </div>
            </form>
        </div>
    )
}