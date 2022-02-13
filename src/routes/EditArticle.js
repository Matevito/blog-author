import { useParams } from "react-router-dom";
const EditArticle = ({ user }) => {
    const { id } = useParams();
    return (
        <div>edit article page: {id}</div>
    )
}

export default EditArticle;