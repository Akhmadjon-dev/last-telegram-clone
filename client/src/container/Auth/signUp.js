import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import "./style.css";
const SignUp = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const formHandler = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);

    axios
      .post("/auth/sign-in", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    console.log(user);
  };
  return (
    <div className="signIn">
      <div className="signIn__header">
        <Link to="/" className="signIn__back-icon">
          <IoMdArrowRoundBack />
        </Link>
        <h3>SETTINGS</h3>
      </div>
      <div className="signIn__container">
        <div>
          <h3>Your email and password</h3>
          <p>Please confirm your email and enter password</p>
          <form onSubmit={formHandler} className="signIn__form">
            <input
              onChange={inputHandler}
              className="signIn__input"
              name="email"
              placeholder="Enter your email"
            />
            <input
              onChange={inputHandler}
              className="signIn__input"
              name="password"
              type="password"
              placeholder="Enter password "
            />
            <button className="signIn__btn" type="submit">
              NEXT
            </button>
          </form>
          <span>
            If you have an account. You can sign in{" "}
            <Link to="/sign-in">here</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
