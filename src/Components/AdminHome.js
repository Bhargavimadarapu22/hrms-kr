import React from "react";
import { useLocation } from "react-router-dom";

import "./AdminHome.css";
import LoginForm from "./LoginForm/LoginForm";

function AdminHome(props) {
  const location = useLocation();
  const username = location.state;
  return (
    <div>
      <div class="App">
        <div className="header">
          <h3 className="heading">HR Portal</h3>
          <div className="navbar">
            <button>Services</button>
            <button>Contact</button>
            <h1>Welcome ,{username}</h1>
          </div>
        </div>
      </div>
      <div className="list">
        <ul>
          <li>employee 1</li>
          <li>employee 2</li>
          <li>employee 3</li>
          <li>employee 4</li>
          <li>employee 5</li>
        </ul>
      </div>
    </div>
  );
}
export default AdminHome;
