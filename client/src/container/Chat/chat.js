import React, { useContext, useEffect, useState } from "react";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { BsLayoutTextWindow } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { TiMicrophoneOutline } from "react-icons/ti";
import { RiSendPlane2Line } from "react-icons/ri";
import { GrAttachment } from "react-icons/gr";
import { BiSmile } from "react-icons/bi";
import axios from "../../utils/axios";
import moment from "moment";
import UserContext from "../../store/context/auth";

import "./style.css";

const Chat = (props) => {
  const { isInfo, data } = props;
  const { userId, infoIsShown } = data;
  const { user } = useContext(UserContext);
  const [msg, setMsg] = useState([]);
  const [chatMsg, setChatMsg] = useState([]);

  useEffect(() => {
    axios
      .get("/message")
      .then((res) => {
        setMsg(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const res = msg.filter((item) => item.toId === userId._id);
    setChatMsg(res);
    console.log(res, userId);
  }, [userId]);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__title-block">
          <h4 className="chat__name"> {userId.userName} </h4>
          <span className="chat__time">
            {moment(userId.updatedAt).fromNow()}
          </span>
        </div>
        <div className="chat__icons">
          <div className="chat__icon">
            <FaPhoneAlt />
          </div>
          <div className="chat__icon">
            <FaSearch />
          </div>
          <div
            onClick={() => {
              isInfo(!infoIsShown);
            }}
            className="chat__icon"
          >
            <BsLayoutTextWindow />
          </div>
          <div className="chat__icon">
            <HiDotsVertical />
          </div>
        </div>
      </div>

      <div className="chat__message-block">
        {chatMsg.map((item) =>
          item.fromId === userId._id ? (
            <div key={item._id} className="chat__message chat__go-message">
              <p className="chat__message-text">{item.text}</p>
              <span className="chat__message-time">3:07 PM</span>
            </div>
          ) : item.toId === userId._id ? (
            <div key={item._id} className="chat__message chat__come-message">
              <p className="chat__message-text"> {item.text} </p>
              <span className="chat__message-time">3:07 PM</span>
            </div>
          ) : null
        )}
      </div>

      <div className="chat__form">
        <div className="chat__icon chat__file-icon">
          <GrAttachment />
        </div>
        <form className="chat__form">
          <input
            className="chat__input"
            type="text"
            placeholder="Write a message..."
          />
          <button type="submit">send</button>
          <div className="chat__icon">
            <BiSmile />
          </div>
          <div className="chat__icon">
            <TiMicrophoneOutline />
          </div>
          <div className="chat__icon">
            <RiSendPlane2Line />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
