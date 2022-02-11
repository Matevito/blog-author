import React, { useState} from "react";
import { Navigate } from "react-router-dom";
import LoginError from "../components/loginError";
import { Box, Grid, Typography, TextField, Button} from "@mui/material";

const axios = require("axios");

const api = axios.create({
    baseURL: "https://polar-depths-85779.herokuapp.com/apiv1/",
    timeout: 1000
});

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
        try{
            const user = await api.post("/log-in",{username, password})
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
                <Grid container justifyContent="center">
                    <Grid item xs={6}>
                    <Box
                        xs={{
                            marginTop:8,
                            display:"flex",
                            flexDirection: "column",
                            alignItems:"center"
                        }}
                    >
                        <p></p>
                        <Typography component="h1" variant="h5">
                            Log in to the App!
                        </Typography>
                        <LoginError error={error} />
                        <p></p>
                        <form action="#" onSubmit={handleLogin}>
                            <TextField fullWidth label="Username" defaultValue={username} onChange={handleUsername}></TextField>
                            <TextField fullWidth label="Password" type="password" value={password} onChange={handlePassword}/>
                            
                            <Button 
                                variant="contained"
                                type="submit"
                                fullWidth
                            >
                            Submit
                            </Button>
                        </form>
                    </Box>
                    </Grid>
                </Grid>
        )
    }
}

export default Login;