import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import Header from "./components/Header";
import LogoutPage from "./pages/LogoutPage";

import UserContext from "./context/UserContext";

function App() {
  const clientId = process.env.REACT_APP_CLIENT_ID;

  const [userInfo, setUserInfo] = useState([]);

  const verifyToken = async () => {
    const access_key = localStorage.getItem("access_token");
    const username = localStorage.getItem("username");

    fetch("/user/token/verify/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: access_key }),
    }).then((response) => {
      if (response.ok) {
        setUserInfo({
          ...userInfo,
          access_token: access_key,
          username: username,
        });
      } else {
        setUserInfo({ ...userInfo, access_token: null, username: null });
      }
    });
  };

  const updateUserInfo = (value) => {
    setUserInfo(value);
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userInfo, updateUserInfo }}>
        <GoogleOAuthProvider clientId={clientId}>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" exact element={<PostListPage />}></Route>
              <Route path="/blog/post/:postId/" element={<PostDetailPage />}></Route>
              <Route path="/logout/" element={<LogoutPage />} />
            </Routes>
          </div>
        </GoogleOAuthProvider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
