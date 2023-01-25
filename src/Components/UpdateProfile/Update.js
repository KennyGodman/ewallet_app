import React from "react";
import "./Update.css";
import profileImg from "../../Assets/img/logoss.jpeg";
import { Link } from "react-router-dom";

function Update() {
  return (
    <div className="update_container">
      <div className="update">
        <div className="update_Image">
          <img src={profileImg} />
        </div>
        <div className="update_form">
          <h5>More Details About You!</h5>
          <hr></hr>
          <h3>Next of Kin</h3>

          <form>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Relationship" />

            <hr className="line"></hr>
            <h4>BVN</h4>
            
            <input type="text" placeholder="BVN" />
            <button>Continue</button>

            <Link to="/profile"><h6>Prev</h6></Link>        
            </form>
          </div>
    
        
          <div></div>
        </div>
    </div>
  );
}

export default Update;
