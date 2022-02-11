import React, { useState, useEffect } from "react";

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
            <div>
                <h1>User loged in!</h1>
            </div>
        )
    }
}

export default Home;