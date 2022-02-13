import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import ArticleForm from "../components/ArticleForm";
import ArticleError from "../components/articleError";
import api from "../components/api"

const EditArticle = ({ user }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState();
    const [error, setError] = useState()

    useEffect(() => {
        getArticle();
    }, [])

    const getArticle = async() => {
        // todo: make a route in the api to return just one article
        if (!user) { navigate("/")}
        let token = user.token;
        try {
            const config = {
                headers: {
                    "auth-token": token
                }
            };
            let articlesList = await api.get(`/user/${user.id}/posts`, config);
            articlesList = articlesList.data.data;
            let foundArticle = articlesList.filter(post => post._id === id);
            foundArticle = foundArticle[0]
            setArticle(foundArticle);
        } catch (err) {
            console.log(err);
            navigate("/")
        }
    }
    if (!user) {
        return (
            <div>Loading gif...</div>
        )
    } else if (!article) {
        return (
            <div>Loading...</div>
        )
    } else {
        console.log(article)
        return (
            <Grid container justifyContent="center">
                <Grid item xs={10}>
                    <p></p>
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
                            Edit the article, {user.username}!
                        </Typography>
                        <ArticleError error={error}/>
                        <ArticleForm article={article}/>
                    </Box>
                    
                </Grid>
            </Grid>
        )
    }
}

export default EditArticle;