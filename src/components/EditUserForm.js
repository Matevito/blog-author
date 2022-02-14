import { useState, useEffect } from "react";

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
        <div>Here goes a form!
            <button onClick={handleSubmit}>log user info</button>
        </div>
    )
}

export default EditUserForm;