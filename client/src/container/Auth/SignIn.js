import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./style.css";
const SignIn = () => {
  return (
    <div className="signIn">
      <div className="signIn__header">
        <div className="signIn__back-icon">
          <IoMdArrowRoundBack />
        </div>
        <h3>SETTINGS</h3>
      </div>
      <div className="signIn__container">
        <div>
          <h3>Your email and password</h3>
          <p>Please confirm your email and enter password</p>
          <form className="signIn__form">
            <input
              className="signIn__input"
              name="email"
              placeholder="Enter your email"
            />
            <input
              className="signIn__input"
              name="password"
              type="password"
              placeholder="Enter password "
            />
            <button className="signIn__btn" type="submit">
              NEXT
            </button>
          </form>
          <span>Quick Sign up. If you don't have an account.</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
