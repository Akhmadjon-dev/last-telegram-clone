import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import User from "./User";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <div className="contact__icon">
          <GiHamburgerMenu />
        </div>
        <div className="contact__search">
          <input type="text" placeholder="Search" />
          <MdClose className="contact__close" />
        </div>
      </div>
      <User />
    </div>
  );
};

export default Contact;
