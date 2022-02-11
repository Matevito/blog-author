import React, { useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SigninError from "../components/signinError";
import { Box, Grid, Typography, TextField, Button} from "@mui/material";
import api from "../components/api";

const Signin  = ({ user }) => {
    // 1. component states.
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repPassword, setRepPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSeconName] = useState("");
    const [error, setError] = useState();
        // const to return to home once a user is created successfully!
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
            const createdUser = await api.post("/sign-in", userForm);
            cleanForm();
            navigate("/");
            // The signin was a success, redirect to home!
        } catch (err) {
            setError(err.response.data)
        }
    }

    // 3. Handle output.
    if (user) {
        return <Navigate to="/" replace />
    } else {
        return (
            <Grid container justifyContent="center">
                <Grid item xs={6}>
                    <Box
                        xs={{
                            marginTop: 8,
                            display:"flex",
                            flexDirection: "column",
                            alignItems:"center"
                        }}
                    >
                        <p></p>
                        <Typography component="h1" variant="h5">
                            Sign in!
                        </Typography>
                        <SigninError error={error} />
                        <p></p>
                        <form action="#" onSubmit={handleSignin}>
                            <TextField fullWidth label="username" defaultValue={username} onChange={handleUsername}/>
                            <TextField fullWidth type="password" label="password" defaultValue={password} onChange={handlePassword}/>
                            <TextField fullWidth type="password" label="repeat password" defaultValue={repPassword} onChange={handleRepPassword}/>
                            <TextField fullWidth label="first name" defaultValue={firstName} onChange={handleFirstName}/>
                            <TextField fullWidth label="second name" defaultValue={secondName} onChange={handleSecondName}/>
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

export default Signin;