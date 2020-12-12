import React from "react";
import UserImg from "../../assets/img/user.jpg";
import moment from "moment";
const User = (props) => {
  const { data, Click } = props;
  const { _id, img, userName, updatedAt } = data;
  function userId() {
    Click(_id);
  }
  return (
    <div onClick={userId} className="user">
      <img className="user__image" src={img ? img : UserImg} alt="user" />
      <div className="user__block">
        <div className="user__row-in-name">
          <h3 className="user__name">{userName}</h3>
          <span className="user__time">{moment(updatedAt).fromNow()}</span>
        </div>
        <div className="user__row-in-text">
          <p className="user__text">
            hey are you feeling good today? there it is message man : )
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
