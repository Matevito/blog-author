import React, { useState, useEffect } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from "./_header";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signin from "./routes/Signin";
//import EditArticle from "./routes/EditArticle";
//import CreateArticle from "./routes/CreateArticle";
//todo: edit user profile data!

const axios = require("axios");
const api = axios.create({
  baseURL: "https://polar-depths-85779.herokuapp.com/apiv1/",
  timeout: 1000
});

function App() {
  // object structure: {id, username, token}
  const [user, setUser] = useState();

  useEffect(() => {
    // todo: search and load a token //  set up user value
    return () => {
      
    }
  }, []);

  const handleUser = async (userToken) => {
    // 1. set up jwt on localstorage
    try { 
      // 2. call api for user info of the jwt token}
      const config = {
        headers: {
          "auth-token": userToken
        }
      }
      const userInfo = await api.get("/whoami", config);
      const userResponse = userInfo.data.data
      
      // cause everything is fine we can save the token on the storage
      localStorage.setItem("blogToken", userToken)

      // 3. set up the user object in the app.
      setUser({
        username: userResponse.username,
        id: userResponse.id,
        token: userToken
      })
    } catch (err) {
      console.log(err.response.data)
    }
  }
  return (
    <BrowserRouter>
      <Header user={user}/>
      <Routes>
        <Route exact path="/" element={<Home user={user}/>} />
        <Route exact path="/login" element={<Login setUpUser={handleUser} user={user}/>}/>
        <Route exact path="/signin" element={<Signin user={user}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
