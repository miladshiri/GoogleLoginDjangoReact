import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../context/UserContext";

const LogoutPage = () => {
  const navigate = useNavigate();
  const { updateUserInfo } = useContext(UserContext);

  useEffect(() => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    updateUserInfo([]);
    navigate("/");
  }, []);
  return <div>LogoutPage</div>;
};

export default LogoutPage;
