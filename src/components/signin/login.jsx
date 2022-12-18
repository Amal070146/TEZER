import React from "react";
import "./signin.css";
import ME from "../../assets/App Logo.png";
import {useNavigate} from 'react-router-dom';

const signin = () => {
  const navigate  = useNavigate();
  return (
    <div className="signin-wrapper">
      <div className="signin-wrapper-image">
        <img className="image-signin" src={ME} alt="" />
        <h2>Welcome Back </h2>
      </div>
      <div className="form-signin-wrapper">
        <form action="">
          
          <div className="form-signin">
            <label htmlFor="">Email :</label>
            <input
              type="text"
              id="fname"
              name="name"
              placeholder="Your Email.."
            />
          </div>
          
          <div className="form-signin">
            <label htmlFor="">Password :</label>
            <input
              type="password"
              id="fname"
              name="name"
              placeholder="Enter Password"
            />
          </div>
          
          <div className="submitbutton">
            <button onClick={(e)=>{navigate('/profile')}}>Submit</button>
          </div>
        </form>
      </div>
      <div className="login-here">
        <p>Don’t have an account?</p><span>
        <a href="" onClick={(e)=>navigate('/signup')}>Register now</a></span>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default signin;
