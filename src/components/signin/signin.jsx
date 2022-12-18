import React from "react";
import "./signin.css";
import ME from "../../assets/App Logo.png";

const signin = () => {
  return (
    <div className="signin-wrapper">
      <div className="signin-wrapper-image">
        <img className="image-signin" src={ME} alt="" />
        <h2>Welcome to Tetra</h2>
      </div>
      <div className="form-signin-wrapper">
        <form action="/loginresponse">
          <div className="form-signin">
            <label htmlFor="">Name :</label>
            <input
              type="text"
              id="fname"
              name="name"
              placeholder="Your name.."
            />
          </div>
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
            <label htmlFor="">Age : </label>
            <input
              type="text"
              id="fname"
              name="name"
              placeholder="Your Age.."
            />
          </div>
          <div className="form-signin">
            <label htmlFor="">Phone :</label>
            <input
              type="number"
              id="fname"
              name="name"
              placeholder="Your phone number.."
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
          <div className="form-signin">
            <label htmlFor="">Confirm Password :</label>
            <input
              type="password"
              id="fname"
              name="name"
              placeholder="Confirm password..."
            />
          </div>
          <div className="submitbutton">
            <button onClick={(e)=>{navigate('/profile')}}>Submit</button>
          </div>
        </form>
      </div>
      <div className="login-here">
        <p>Already have an account?</p><span>
        <a href="">Login Here</a></span>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default signin;
