import React from "react";
import "./Login.css";
import loginImg from "../../Assets/img/logos.jpeg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login_container">
      <div className="login">
        <div className="login_Image">
          <img src={loginImg} />
        </div>
        <div className="login_form">
          <h1>Welcome back!</h1>
          <p>login to your dashboard</p>
          <form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
          </form>
          <div className="f_one">
            <form>
              <input type="checkbox" />
              <label for="name">Remember Me</label>
            </form>
            <p>Forgot Password?</p>
          </div>
          <button>Login</button>
          <div className="login_form_signin">
            <p>Dont have an accout?</p>
            <Link to="/signup"><p><span>Sign Up</span></p></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
