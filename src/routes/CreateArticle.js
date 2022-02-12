import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import ArticleForm from "../components/ArticleForm";
import api from "../components/api";

const CreateArticle = ({ user }) => {
    // 1. states
    const [error, setError] = useState();
    const navigate = useNavigate();

    // 2. component functions
    const postArticle = async (article) => {
        // 1. adding id value required to article object
        // structure: {id, title, text}
        //article.id = user.id
        console.log(article)
        // 2. attempt to publish the article
        try{
            let config = {
                headers: {
                    "auth-token": user.token
                }
            }
            // make the post request
            const publishedArt = await api.post('/post', article, config);
            console.log(publishedArt)
            navigate("/")
        } catch (err) {
            setError(err);
        }
    }

    // 3. returned view from component
    if (!user) {
        return (
            <div>Loading gif...</div>
        )
    } else {
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
                            Create a new article, {user.username}!
                        </Typography>
                        <div>todo: Errors on the form</div>
                        <ArticleForm handleForm={postArticle} userId={user.id} />
                    </Box>
                    
                </Grid>
            </Grid>
        )
    }
}

export default CreateArticle;