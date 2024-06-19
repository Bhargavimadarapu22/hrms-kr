import React from "react";
import './registration.css'
function Registration()
{
    return  <div>
        <div className="Registration"> 
            <p>Sign up</p>
            <input type="text" id="firstName" placeholder="First Name"></input>
            <input type="text" id="lastName" className="lastName" placeholder="Last Name"></input>
            <input type="email" id="email" placeholder="Enter email"></input>
            <input type="password" id="password" placeholder="password"></input>
            <input type="password" id="password" placeholder="confirm password"></input>
            <br></br>
            <input type="checkbox" id="agree" className="agree" value="agree"></input>
            <label for="agree" className="agree-label">I agree to CAKE.com<a><span>Terms of Use</span></a></label>
            <button className="continue">CONTINUE WITH EMAIL</button>
            <p className="divider">OR</p>
            <a className="link" href="#"><button>CONTINUE WITH GOOGLE</button></a>
        </div>
   
  </div>
}

export default Registration;