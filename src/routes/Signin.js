import React, { useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
const axios = require("axios");
const api = axios.create({
    baseURL: "https://polar-depths-85779.herokuapp.com/apiv1/",
    timeout: 1000
});

const Signin  = ({ user }) => {
    // 1. component states.
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repPassword, setRepPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSeconName] = useState("");
    const [error, setError] = useState();
    const navigate = useNavigate();

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
        setFirstName(event.target.value)
    }
    const handleSecondName = (event) => {
        setSeconName(event.target.value)
    }
    const cleanForm = () => {
        setUsername("");
        setPassword("");
        setRepPassword("");
        setFirstName("");
        setSeconName("");
        setError();
    }
    const handleSignin = async (event) => {
        event.preventDefault();
        try {
            const userForm = {
                username,
                password,
                repeat_password: repPassword,
                firstName,
                secondName
            }
            // eslint-disable-next-line no-unused-vars
            const user = await api.post("/sign-in", userForm);
            cleanForm();
            navigate("/");
            // The signin was a success, redirect to home!
        } catch(err) {
            setError(err.response.data)
        }
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
                        <input type="text" value={firstName} onChange={handleFirstName}/>
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