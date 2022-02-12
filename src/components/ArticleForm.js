import { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const ArticleForm = ({  article, handleForm }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        if (article) {
            // handling an edit article form!
            setTitle(article.title);
            setText(article.text);
        }
    },[]);

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleText = (editorText) => {
        setText(editorText)
    }
    
    const handleSubmit = (event) => {
        // create and object and call handleForm
        event.preventDefault()
        let articleObj = {
            title,
            text
        };
        handleForm(articleObj);
    }
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <TextField 
                    fullWidth
                    label="Title"
                    defaultValue={title}
                    onChange={handleTitle}
                />
                <CKEditor
                    editor={ClassicEditor}
                    onChange={(event, editor) => {
                        handleText(editor.getData())
                    }}
                    data={text}
                />

                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    >
                    Create new article!
                </Button>
            </form>
        </Box>
    )
};

export default ArticleForm;