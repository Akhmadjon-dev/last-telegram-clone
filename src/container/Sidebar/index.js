import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <div className="contact__icon">
          <GiHamburgerMenu />
        </div>
        <div className="contact__search">
          <input type="text" />
          <MdClose />
        </div>
      </div>
    </div>
  );
};

export default Contact;
