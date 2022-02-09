import React, { useState, useEffect } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from "./_header";
//import _footer from "./_footer";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signin from "./routes/Signin";
//import EditArticle from "./routes/EditArticle";
//import CreateArticle from "./routes/CreateArticle";

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
