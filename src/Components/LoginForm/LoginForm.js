import React, { useState } from "react";
import "./LoginForm.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AdminHome from "../AdminHome";
import Registration from "../registration";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setIsLoggedIn(true);
    if (role === "admin" && isLoggedIn) {
      navigate("/AdminHome", { state: username });
    }
  };

  return (
    <div>
      <div className="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <div className="radios">
            <input
              type="radio"
              id="admin"
              name="fav_language"
              value="admin"
              checked={role === "admin"}
              onChange={() => setRole("admin")}
            />
            <label htmlFor="admin">Admin</label>

            <input
              type="radio"
              id="employee"
              name="fav_language"
              value="employee"
              checked={role === "employee"}
              onChange={() => setRole("employee")}
            />
            <label htmlFor="employee">Employee</label>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account? <Link to="/Register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
