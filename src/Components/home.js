import React from "react";
import "./home.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
function home() {
  return (
    <div className="app">
      <div className="header">
        <h3 className="heading">HR Portal</h3>
        <div className="navbar">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/Register">
            <button>Registration</button>
          </Link>
        </div>
      </div>
      <div className="image-container">
        <img src="https://th.bing.com/th/id/OIP.u-A2LcQfxG9vNt1RVNzMpwHaFj?w=221&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7"></img>
      </div>
    </div>
  );
}

export default home;
