import React from "react";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineInfoCircle, AiOutlineUnorderedList } from "react-icons/ai";
import { FiFile } from "react-icons/fi";
import { CgHeadset } from "react-icons/cg";
import { BiVideo, BiMicrophone, BiUser } from "react-icons/bi";
import { HiOutlinePhotograph } from "react-icons/hi";
import {
  IoIosNotificationsOutline,
  IoToggle,
  IoLinkSharp,
} from "react-icons/io";
import UserImg from "../../assets/img/user.jpg";

import "./style.css";
const Info = () => {
  return (
    <div className="info">
      <div className="info__header">
        <div className="info__title">
          <h3>User Info</h3>
          <div className="info__icon">
            <GrFormClose />
          </div>
        </div>
        <div className="info__img-row">
          <img src={UserImg} alt="user-info-img" className="info__image" />
          <div>
            <h2 className="info__name">Jhon Snow</h2>
            <span className="info__time">last seen recently</span>
          </div>
        </div>
      </div>
      <div className="info__notif-rows">
        <div className="info__notif-row">
          <div className="info__icon">
            <AiOutlineInfoCircle />
          </div>
          <div className="info__phone">
            <p>+99 899 557 87 99</p>
            <span className="info__time">Mobile</span>
          </div>
        </div>
        <div className="info__notif-row">
          <div className="info__icon">
            <IoIosNotificationsOutline />
          </div>
          <div className="info__phone">
            <p>+99 899 557 87 99</p>
            <div className="info__icon">
              <IoIosNotificationsOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
