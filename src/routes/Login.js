import React, { useState} from "react";

const Login  = ({ setUpUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = () => {
        //todo:
        console.log("handle login!")
    }
    return (
        <div>
            <h1>login form!</h1>
            <form action="#" onSubmit={handleLogin}>
                <label>
                    Username: 
                    <input type="text" value={username} onChange={handleUsername}/>
                </label>"
                <label>
                    Password: 
                    <input type="password" value={password} onChange={handlePassword}/>
                </label>
                <hr></hr>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;