import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import api from "../components/api";

const EditUser = ({ user }) => {
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getUserInfo()
    }, [])

    const getUserInfo = async() => {
        // fetch data of user.
        if (!user) { navigate("/")}
        try {
            const userInfo = await api.get(`/user/${user.id}`)
            setUserInfo(userInfo.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    const handleEditUser = async(event) => {
        event.preventDefault();
        console.log(userInfo)
    }
    if (!user) {
        return <div>loading ....</div>
    }
    else {
        return (
            <div>Edit info.
                <button onClick={handleEditUser}> console user info</button>
            </div>
        )
    }
};

export default EditUser;