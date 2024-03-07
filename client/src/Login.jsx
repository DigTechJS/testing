import {useState} from 'react';
import {Navigate} from 'react-router-dom';
export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    async function login(ev){
        ev.preventDefault();
        const res=await fetch( `https://testing-xi.vercel.app/login`,{
            method: 'POST',
            credentials: 'include',
            body:JSON.stringify({username,password}),
            headers:{'Content-Type': 'application/json'},
            

        })
        if(res.ok){
            setRedirect(true);
        }
        else{
            alert('Wrong Credentials')
        }
    }
    if(redirect){
        return <Navigate to={'/'}/>
    }
    return(
            <form className="login" onSubmit={login}>
                <h1>Login</h1>
                <input type="text" placeholder="username" value={username} onChange={(ev)=>{
                    return setUsername(ev.target.value)
                }}/>
                <input type="password" placeholder="password" value={password} onChange={(ev)=>{
                    return setPassword(ev.target.value)
                }}/>
                <button>Login</button>
            </form>
        
    )
}