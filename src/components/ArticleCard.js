import React from 'react'
import { useNavigate } from "react-router-dom";
import { Card, Typography, Button } from "@mui/material";
import api from "./api";

export default function ArticleCard({ post, userToken, publish }) {
    const handlePublish = async () => {
        try {
            const config = {
                headers: {
                    "auth-token": userToken
                }
            }
            const response = await api.put(`/post/${post._id}/publish`, {}, config);
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
        <Card>
            <Typography component="h1" variant="h5">
                <b>Article id:</b> {post._id}
            </Typography>
            <Typography sx={{ fontSize: 14 }} component="h2" variant="h8">
                <b>Title:</b> {post.title}
            </Typography>
            <Typography>
                <b>Publish status:</b> {post.published ? <>published</> : <>not published</>}
            </Typography>
            <Button>
                edit
            </Button>
            <Button>
                delete
            </Button>
            <Button onClick={handlePublish}>
                {post.published ? <>unpublish</> : <>publish</>}
            </Button>
        </Card>
        <p></p>
        </>
    )
}
