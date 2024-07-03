import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./Components/registration";
import LoginForm from "./Components/LoginForm/LoginForm";
import Home from "./Components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Component } from "react";
import Registration from "./Components/registration";
import AdminHome from "./Components/AdminHome";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            {/*  <div className="navbar">
            <button>Login</button>
            <button>Register</button>
          </div> */}
            <Routes>
              <Route path="/" Component={Home}></Route>
              <Route path="/login" Component={LoginForm}></Route>
              <Route path="/Register" Component={Registration}></Route>
              <Route path="/AdminHome" Component={AdminHome}></Route>
            </Routes>
          </div>
        </Router>
        <div></div>
      </div>
    );
  }
}

export default App;
