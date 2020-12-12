import React, { useContext, useEffect, useState } from "react";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { BsLayoutTextWindow } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { TiMicrophoneOutline } from "react-icons/ti";
import { RiSendPlane2Line } from "react-icons/ri";
import { GrAttachment } from "react-icons/gr";
import { BiSmile } from "react-icons/bi";
import axios from "../../utils/axios";
import UserContext from "../../store/context/auth";
import "./style.css";

const Chat = (props) => {
  const { _id } = props;
  const { user } = useContext(UserContext);
  const [msg, setMsg] = useState([]);
  const [chatMsg, setChatMsg] = useState([]);

  console.log(user, "context api chat");
  useEffect(() => {
    axios
      .get("/message")
      .then((res) => {
        setMsg(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const res = msg.filter((item) => item._id === _id);
    setChatMsg(res);
  }, [_id]);

  // console.log(msg, chatMsg);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__title-block">
          <h4 className="chat__name">Jhon Snow</h4>
          <span className="chat__time">last seen recently</span>
        </div>
        <div className="chat__icons">
          <div className="chat__icon">
            <FaPhoneAlt />
          </div>
          <div className="chat__icon">
            <FaSearch />
          </div>
          <div className="chat__icon">
            <BsLayoutTextWindow />
          </div>
          <div className="chat__icon">
            <HiDotsVertical />
          </div>
        </div>
      </div>

      <div className="chat__message-block">
        <div className="chat__message chat__come-message">
          <p className="chat__message-text">yo my name is Jhon</p>
          <span className="chat__message-time">3:07 PM</span>
        </div>
        <div className="chat__message chat__go-message">
          <p className="chat__message-text">woow nice name man!</p>
          <span className="chat__message-time">3:10 PM</span>
        </div>
        <div className="chat__message chat__come-message">
          <p className="chat__message-text">
            so what is your name? do you ever heard about me? man{" "}
          </p>
          <span className="chat__message-time">3:07 PM</span>
        </div>
        <div className="chat__message chat__come-message">
          <p className="chat__message-text">
            so what is your name? do you ever heard about me? man{" "}
          </p>
          <span className="chat__message-time">3:07 PM</span>
        </div>
        <div className="chat__message chat__come-message">
          <p className="chat__message-text">
            so what is your name? do you ever heard about me? man{" "}
          </p>
          <span className="chat__message-time">3:07 PM</span>
        </div>
        <div className="chat__message chat__go-message">
          <p className="chat__message-text">woow nice name man!</p>
          <span className="chat__message-time">3:10 PM</span>
        </div>
        <div className="chat__message chat__come-message">
          <p className="chat__message-text">
            so what is your name? do you ever heard about me? man{" "}
          </p>
          <span className="chat__message-time">3:07 PM</span>
        </div>
        <div className="chat__message chat__come-message">
          <p className="chat__message-text">
            so what is your name? do you ever heard about me? man{" "}
          </p>
          <span className="chat__message-time">3:07 PM</span>
        </div>
        <div className="chat__message chat__come-message">
          <p className="chat__message-text">
            so what is your name? do you ever heard about me? man{" "}
          </p>
          <span className="chat__message-time">3:07 PM</span>
        </div>
        <div className="chat__message chat__go-message">
          <p className="chat__message-text">woow nice name man!</p>
          <span className="chat__message-time">3:10 PM</span>
        </div>
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
