import React from "react";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiFile } from "react-icons/fi";
import { CgHeadset } from "react-icons/cg";
import { BiVideo, BiMicrophone, BiUser } from "react-icons/bi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoToggle, IoLinkSharp, IoList } from "react-icons/io5";
import UserImg from "../../assets/img/user.jpg";
import moment from "moment";

import "./style.css";
const Info = (props) => {
  const { data, isInfo, userId } = props;
  return (
    <div className="info">
      <div className="info__title">
        <h3>User Info</h3>
        <div onClick={() => isInfo(!data)} className="info__icon">
          <GrFormClose />
        </div>
      </div>
      <div className="info__main">
        <div className="info__header">
          <div className="info__img-row">
            <img
              src={userId.img ? userId.img : UserImg}
              alt="user-info-img"
              className="info__image"
            />
            <div>
              <h2 className="info__name"> {userId.userName} </h2>
              <span className="info__time">
                {" "}
                {moment(userId.updatedAt).fromNow()}{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="info__notif-rows">
          <div className="info__notif-row">
            <div className="info__icon">
              <AiOutlineInfoCircle />
            </div>
            <div className="info__phone">
              <p>{userId.phone}</p>
              <span className="info__time">Mobile</span>
            </div>
          </div>
          <hr />
          <div className="info__notif-row">
            <div className="info__icon">
              <IoIosNotificationsOutline />
            </div>
            <div className="info__notification">
              <p>Notifications</p>
              <div className="info__icon">
                <IoToggle />
              </div>
            </div>
          </div>
        </div>

        <div className="info__files-section">
          <div className="info__files-row">
            <div className="info__icon">
              <HiOutlinePhotograph />
            </div>
            <div className="info__files-text">
              <span className="info__files-numbers">25</span>
              photos
            </div>
          </div>
          <div className="info__files-row">
            <div className="info__icon">
              <BiVideo />
            </div>
            <div className="info__files-text">
              <span className="info__files-numbers">5</span>
              videos
            </div>
          </div>
          <div className="info__files-row">
            <div className="info__icon">
              <FiFile />
            </div>
            <div className="info__files-text">
              <span className="info__files-numbers">78</span>
              files
            </div>
          </div>
          <div className="info__files-row">
            <div className="info__icon">
              <CgHeadset />
            </div>
            <div className="info__files-text">
              <span className="info__files-numbers">21</span>
              audio files
            </div>
          </div>
          <div className="info__files-row">
            <div className="info__icon">
              <IoLinkSharp />
            </div>
            <div className="info__files-text">
              <span className="info__files-numbers">32</span>
              shared files
            </div>
          </div>
          <div className="info__files-row">
            <div className="info__icon">
              <BiMicrophone />
            </div>
            <div className="info__files-text">
              <span className="info__files-numbers">8</span>
              voice messages
            </div>
          </div>
          <div className="info__files-row">
            <div className="info__icon">
              <BiUser />
            </div>
            <div className="info__files-text">
              <span className="info__files-numbers">8</span>
              group in common
            </div>
          </div>
        </div>

        <div className="info__bottom">
          <div className="info__bottom-row">
            <div className="info__icon">
              <IoList />
            </div>
            <div className="info__bottom-text-first">Share contact</div>
          </div>
          <div className="info__bottom-row">
            <div className="info__bottom-text">Edit contact</div>
          </div>
          <div className="info__bottom-row">
            <div className="info__bottom-text">Delete contact</div>
          </div>
          <div className="info__bottom-row">
            <div className="info__bottom-text">Clear history</div>
          </div>
          <div className="info__bottom-row">
            <div className="info__bottom-text">Delete chat</div>
          </div>
          <div className="info__bottom-row">
            <div className="info__bottom-text block-user">Block user</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
