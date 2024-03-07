import React, { useState } from 'react';

export default function Register(){


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const register=async(ev)=>{
        ev.preventDefault();
    
        try {
            await fetch(`https://testing-xi.vercel.app/register`,{
                method: 'POST',
                body:JSON.stringify({username,password}),
                headers:{'Content-Type': 'application/json'}
            })
            alert("registration successful")

        } catch (error) {
            alert("registration failed")
        }
    }
    return(
            
            <form className="register" onSubmit={register}>
                <h1>Register</h1>
                <input type="text" placeholder="username" value={username} onChange={ev=>setUsername(ev.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={ev=>setPassword(ev.target.value)} />
                <button>Register</button>
            </form>
        
    )
}