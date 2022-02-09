import React, { useState, useEffect } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from "./_header";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signin from "./routes/Signin";
//import EditArticle from "./routes/EditArticle";
//import CreateArticle from "./routes/CreateArticle";

// const API_PATH = "https://polar-depths-85779.herokuapp.com/"

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    // todo: search and load a token //  set up user value
    return () => {
      
    }
  }, []);

  const handleUser = (userToken) => {
    // todo set up userINfo as user and set up the token on the browser!
    // call the api for user info!
    setUser("loged in")
    // set up token in browser
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
