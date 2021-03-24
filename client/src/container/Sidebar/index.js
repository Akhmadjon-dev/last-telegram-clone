import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import User from "./User";
import "./style.css";

const Contact = ({ data, setId, setBar }) => {
  return (
    <div className="contact">
      <div className="contact__header">
        <div
          onClick={() => {
            setBar();
          }}
          className="contact__icon"
        >
          <GiHamburgerMenu />
        </div>
        <div className="contact__search">
          <input type="text" placeholder="Search" />
          <MdClose className="contact__close" />
        </div>
      </div>
      <div className="contact__user">
        {data.map((user) => (
          <User Click={setId} data={user} key={user._id} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
