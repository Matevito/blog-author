import React, { useState} from "react";
import { Navigate } from "react-router-dom";
import LoginError from "../components/loginError";

const axios = require("axios");

const API_PATH = "https://polar-depths-85779.herokuapp.com/apiv1/"

const Login  = ({ setUpUser, user }) => {
    // 1. component states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState(false);

    // 2. handle render and states functions
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async (event) => {
        event.preventDefault()

        const apiroute = API_PATH + "log-in/";
        try{
            const user = await axios.post(apiroute, {username, password});
            setError(false)
            setUsername("");
            setPassword("")
            setUpUser(user.data.token);
        }catch(err) {
            setError(true)
        }
    }
    
    // 3. component output!
    if (user) {
        return <Navigate to="/" replace />
    } else {
        return (
            <div>
                <h1>log-in form!</h1>
                <LoginError error={error} />
                <form action="#" onSubmit={handleLogin}>
                    <label>
                        Username: 
                        <input type="text" value={username} onChange={handleUsername}/>
                    </label>
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
}

export default Login;