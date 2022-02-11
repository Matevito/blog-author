import ArticleForm from "../components/ArticleForm";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../components/api";
import { token } from "stylis";

const CreateArticle = ({ user }) => {
    // 1. states
    const [error, setError] = useState();
        // const to return to home once a user is created successfully!
    const navigate = useNavigate();

    // 2. component functions
    const postArticle = async (article) => {
        try{
            let config = {
                headers: {
                    "auth-token": token
                }
            }
            // make the post request
            const publishedArt = await api.get("/", article, config);
            navigate("/")
        } catch (err) {
            setError(err.response.data);
        }
    }

    // 3. returned view from component
    return (
        <>
        <div>Create article!</div>
        <div>Errors on the form</div>
        <div>the form goes here</div>
        </>
    )
}

export default CreateArticle;