import { useState, useEffect } from "react";
import { Box } from "@mui/material";

const ArticleForm = ({  article, handleForm }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        if (article) {
            // handling an edit article form!
            setTitle(article.title);
            setText(article.text);
        }
    },[article]);

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleText = (event) => {
        setText(event.target.value);
    }
    
    const handleSubmit = () => {
        // create and object and call handleForm
        let articleObj = {
            title,
            text
        };
        handleForm(articleObj);
    }
    return (
        <div>Here goes the forms</div>
    )
};

export default ArticleForm;