import React, {useState} from 'react'
import loginImg from "../../Assets/img/logo.jpeg";
import "./Otp.css";

const Otp =()=> {
   const[otp,setOtp] = useState(new Array(4).fill(""))
 
   const handleChange = (element, index) =>{
    if (isNaN(element.value)) return false;

    setOtp([...Otp.map((d,idx)=> (idx === index) ? element.value : d)]);
    if (element.nextSibling){
        element.nextSibling.focus();
    }
   };

  return (
        <div className="otp_container">
          <div className="otp">
            <div className="otp_Image">
              <img src={loginImg} />
            </div>
            <div className='otp_form'>
            <div className='text-center'>
                <h3>Enter your Otp Number</h3>
                {otp.map((data, index)=>{
                    return(
                        <input className='otp_field'
                        type="text"
                        name="otp"
                        maxlength="1"
                        key={index}
                        value={data}
                        onChange={e =>handleChange(e.target, index)}
                        onFocus={e => e.target.select()}
                        />
                    )
                })}
                <p>  {otp.join("")}</p>
                <p>
                   <button className='btn_otp'
                   onClick={e=>alert("Entered OTP is" + otp.join)}>Continue
                    </button> 
                </p>

            </div>
            </div>
            </div>
            </div>
  )
}

export default Otp