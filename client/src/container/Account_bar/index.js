import React from "react";
import { GrFormClose } from "react-icons/gr";
import { AiFillFileMarkdown, AiOutlineInfoCircle } from "react-icons/ai";
import { FiFile } from "react-icons/fi";
import { CgHeadset } from "react-icons/cg";
import { BiVideo, BiMicrophone, BiUser, BiDownArrow } from "react-icons/bi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoToggle, IoLinkSharp, IoList } from "react-icons/io5";
import UserImg from "../../assets/img/user.jpg";
import moment from "moment";

import "./style.css";
import { BsBookmark, BsChevronDown } from "react-icons/bs";
const Account_info = ({ isShow }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={isShow ? " bar__show bar " : " bar bar__hide "}
    >
      <div className="bar__header">
        <div className="bar__header-row">
          <img className="bar__img" src={UserImg} alt="user avatar" />
          <div className="bar__icon bar__saved-msg-icon">
            <BsBookmark />
          </div>
        </div>
        <div className="bar__header-row">
          <div>
            <h3 className="bar__userName">Ahmadjon Abdusamadov</h3>
            <p className="bar__phone">+99 899 557 87 99</p>
          </div>
          <div>
            <span>32</span>
            <div className="bar__icon">
              <BsChevronDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account_info;
