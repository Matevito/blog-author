import React, { useState} from "react";
const axios = require("axios");
const API_PATH = "https://polar-depths-85779.herokuapp.com/apiv1/"

const Login  = ({ setUpUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState(false);

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        const apiroute = API_PATH + "log-in/";
        const user = await axios.post(apiroute, {username, password});
        if (!user) { 
            setError(true)
        } else {
            setError(false)
            setUpUser(user.data.token);
            // return to main!
        }
    }
    return (
        <div>
            <h1>login form!</h1>
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

export default Login;