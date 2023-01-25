import React from "react";
import "./Profile.css";
import profileImg from "../../Assets/img/logoss.jpeg";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profile_container">
      <div className="profile">
        <div className="profile_Image">
          <img src={profileImg} />
        </div>
        <div className="profile_form">
          <h5>Kindly complete your registration</h5>
          <hr></hr>
          <h3>KYC</h3>

          <form>
            <p>Select a form of identification</p>
            <input type="text" placeholder="NIN" />
            <input type="text" placeholder="Home Address" />
            <hr className="line"></hr>
            <h4>Add Cards</h4>
            
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Exp Date" />
            <input type="text" placeholder="CVV" />
            <Link to="/update"><h6>Next</h6></Link>          
            </form>
          </div>
    
        
          <div></div>
        </div>
    </div>
  );
}

export default Profile;
