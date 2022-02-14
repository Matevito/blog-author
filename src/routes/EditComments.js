import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../components/api"

const EditComments = ({ user }) => {
    const  { id } = useParams();
    const navigate = useNavigate();
    const [commentList, setCommentList] = useState();
    useEffect(() => {
        getComments()
    }, [])
    const getComments = async () => {
        if (!user) { navigate("/") }
        try {
            let responseList = await api.get(`/post/${id}/comment/list`)
            setCommentList(responseList.data.data)
        } catch (err) {
            console.log(err);
            navigate("/")
        }
    }

    if (!user) {
        return (
            <div>Loading user info...</div>
        )
    } else if (!commentList) {
        return (
            <div>Searching for {id} comments...</div>
        )
    }
    return (
        <div> edit comments of the post {id}</div>
    )
}

export default EditComments;