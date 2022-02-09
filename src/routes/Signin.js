import React, { useState} from "react";
import { Navigate } from "react-router-dom";
const axios = require("axios");

const Signin  = ({ user }) => {
    // 1. component states.
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repPassword, setRepPassword] = useState("");
    const [firsName, setFistName] = useState("");
    const [secondName, setSeconName] = useState("");
    const [error, setError] = useState("");
    // 2. render and states functions.
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleRepPassword = (event) => {
        setRepPassword(event.target.value)
    }
    const handleFirstName = (event) => {
        setFistName(event.target.value)
    }
    const handleSecondName = (event) => {
        setSeconName(event.target.value)
    }

    const handleSignin = async (event) => {
        event.preventDefault();
    }

    // 3. Handle output.
    if (user) {
        return <Navigate to="/" replace />
    } else {
        //todo: handle errors.
        return (
            <div>
                <h1>Sign-in form!</h1>
                <form action="#" onSubmit={handleSignin}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={handleUsername}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePassword}/>
                    </label>
                    <label>
                        Repeat Password:
                        <input type="password" value={repPassword} onChange={handleRepPassword} />
                    </label>
                    <hr></hr>
                    <label>
                        First name:
                        <input type="text" value={firsName} onChange={handleFirstName}/>
                    </label>
                    <label>
                        Second name:
                        <input type="text" value={secondName} onChange={handleSecondName}/>
                    </label>
                    <hr></hr>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Signin;