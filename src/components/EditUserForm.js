import { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";

const EditUserForm = ({ userData, handleForm }) => {
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [bio, setBio] = useState("")

    useEffect(() => {
        if (userData) {
            setUsername(userData.username);
            setFirstName(userData.firstName);
            setSecondName(userData.secondName);
            setBio(userData.bio)
        }
    }, [])
    const handleUsername = (event) => {
        setUsername(event.target.value)
    };
    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    };
    const handleSecondName = (event) => {
        setSecondName(event.target.value)
    }
    const handleBio = (event) => {
        setBio(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const userEdited = {
            username,
            firstName,
            secondName,
            bio
        }
        handleForm(userEdited)
    }
    return (
        <Box  pt={5}>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="username"
                    value={username}
                    onChange={handleUsername}
                    sx={{ m: 0.5 }}
                />
                <TextField
                    fullWidth
                    label="first name"
                    value={firstName}
                    onChange={handleFirstName}
                    sx={{ m: 0.5 }}
                />
                <TextField
                    fullWidth
                    label="second name"
                    value={secondName}
                    onChange={handleSecondName}
                    sx={{ m: 0.5 }}
                />

                <TextField
                    fullWidth
                    label="bio"
                    value={bio}
                    onChange={handleBio}
                    sx={{ m: 0.5 }}
                />
                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    >
                    edit {username} information!
                </Button>
            </form>
        </Box>
    )
}

export default EditUserForm;