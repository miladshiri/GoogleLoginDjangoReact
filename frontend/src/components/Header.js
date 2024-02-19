import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

import GoogleLoginButton from "../components/GoogleLoginButton";

const Header = () => {
  const { userInfo } = useContext(UserContext);
  console.log(userInfo);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            My Blog!
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <span class="navbar-text">
              {userInfo.access_token ? (
                <>
                  Hello {userInfo?.username} !
                  <Link className="nav-link" to="/logout/">
                    Logout
                  </Link>
                </>
              ) : (
                <div className="d-flex align-items-center">
                  <GoogleLoginButton />
                </div>
              )}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
