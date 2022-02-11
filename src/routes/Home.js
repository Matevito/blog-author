import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button } from "@mui/material";
import ArticleCard from "../components/ArticleCard";
import api from "../components/api"

const Home  = ({ user }) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const getArticles = async (token) => {
            try {
                const config = {
                    headers: {
                        "auth-token": token
                    }

                };
                const articlesList = await api.get(`/user/${user.id}/posts`, config);
                setArticles(articlesList.data.data)
            } catch (err) {
                return console.log(err)
            }
        };
        // if user is logged in, fetch user article list!
        if (user) {
            let userToken = user.token;
            getArticles(userToken);
        };

        return () => {
            setArticles([]);
        }
    }, [user])

    if (!user) {
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    } else {
        return (
            <Grid container justifyContent="center">
                <Grid item xs={10}>
                    <Box
                        xs={{
                            marginTop:8,
                            display:"flex",
                            flexDirection:"column",
                            alignItems:"center"
                        }}
                    >
                        <p></p>
                        <Typography component="h1" variant="h5">
                        Wellcome back, {user.username}!
                        </Typography>

                        <Button 
                            variant="contained"
                            fullWidth
                        >
                            <Link to="/article/create" style={{ color: "inherit", textDecoration: 'none' }}>
                                Create new article!
                            </Link>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default Home;