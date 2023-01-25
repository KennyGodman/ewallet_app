import React from 'react'
import "./SignUp"; 
import "./SignUp.css";
import SignUpImg from "../../Assets/img/logo.jpeg";
import { Link } from 'react-router-dom';

function SignUp() {
    return (
      <div className="signup_container">
        <div className="signup">
          <div className="signup_Image">
            <img src={SignUpImg} />
          </div>
          <div className="signup_form">
            <h1>Welcome back!</h1>
            <p>Sign up by entering the information below</p>
            <form>
            <input type="text" placeholder="First Name" />   
            <input type="text" placeholder="Last Name" />  
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
               </form>
            <div className="f_one">
            <p>Already have an account?</p>
          <Link to="/login"><p><span>Login</span></p></Link>
            </div>
            <button>Sign Up</button>
            <div className="signup_form_signin">
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SignUp;
  