import { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";

const EditUserForm = ({ userData, handleForm }) => {
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [bio, setBio] = useState("")

    useEffect(() => {
        if (userData) {
            console.log(userData)
            setFirstName(userData.firstName);
            setSecondName(userData.secondName);
            setBio(userData.bio)
        }
    }, [])

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
                    edit {userData.username} information!
                </Button>
            </form>
        </Box>
    )
}

export default EditUserForm;