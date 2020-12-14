import React, { useContext, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import UserContext from "../../store/context/auth";
import axios from "../../utils/axios";
import "./style.css";
const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [auth, setAuth] = useState({});
  const store = useContext(UserContext);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const formHandler = (e) => {
    e.preventDefault();
    let formData = {
      email: user.email,
      password: user.password,
    };
    axios
      .post("/auth/sign-in", formData)
      .then((res) => {
        console.log(res);
        setAuth(res.data.payload);
        store.updateContext(res.data.payload);
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
            Quick <Link to="/sign-up">Sign up</Link>. If you don't have an
            account.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
