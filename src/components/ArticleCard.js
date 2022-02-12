import React from 'react'
import { Card, Typography, Button } from "@mui/material";

export default function ArticleCard({ post }) {
    
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
            <Button>
                {post.published ? <>unpublish</> : <>publish</>}
            </Button>
        </Card>
        <p></p>
        </>
    )
}
