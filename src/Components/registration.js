import React, { useState } from "react";
import "./registration.css";
import { Link, useNavigate } from "react-router-dom";
function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("fullName :", firstName + "" + lastName);
    console.log("email :", email);
    console.log("password :", password);
    navigate("/login");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="Registration">
          <p>Sign up</p>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <input
            type="text"
            id="lastName"
            className="lastName"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            type="password"
            id="password"
            placeholder="Confirm Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          {/* <input
            type="checkbox"
            id="agree"
            className="agree"
            value="agree"
            required
          /> */}
          {/* <label for="agree" className="agree-label">
            I agree to CAKE.com   
            <a href="">
              <span>Terms of Use</span>
            </a>
          </label> */}
          <p>
            Already have an Account ! <Link to="/login">Go to Login</Link>
          </p>

          <button type="submit" className="continue">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
