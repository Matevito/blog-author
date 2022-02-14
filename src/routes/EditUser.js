import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import EditUserForm from "../components/EditUserForm";
import ArticleError from "../components/articleError";
import api from "../components/api";

const EditUser = ({ user }) => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        getUserInfo()
    }, [])

    const getUserInfo = async() => {
        // fetch data of user.
        if (!user) { navigate("/")}
        try {
            const userInfo = await api.get(`/user/${user.id}`)
            setUserInfo(userInfo.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    const handleEditUser = async(newUserInfo) => {
        try {
            let config = {
                headers: {
                    "auth-token" : user.token
                }
            }
            const editedUser = await api.put(`/user/${user.id}`, newUserInfo, config)
            console.log(editedUser)
            navigate("/")
        } catch (err) {
            setError(err.response.data)
        }
    }

    if (!user) {
        return <div>loading ....</div>
    } else if (!userInfo) {
        return <div>Loading user info...</div>
    } else {
        return (
            <Grid container justifyContent="center">
                <Grid item xs={10}>
                    <Box 
                        sx={{
                            marginTop:8,
                            mx:"auto",
                            display:"flex",
                            flexDirection:"column",
                            alignItems:"center",
                            textAlign: "center"
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Edit {user.username} info
                        </Typography>
                        <ArticleError error={error}/>
                        <EditUserForm handleForm={handleEditUser} userData={userInfo}/>
                    </Box>
                </Grid>
            </Grid>
        )
    }
};

export default EditUser;