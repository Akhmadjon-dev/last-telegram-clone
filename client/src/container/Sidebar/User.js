import React from "react";
import UserImg from "../../assets/img/user.jpg";
const User = () => {
  return (
    <div className="user">
      <img className="user__image" src={UserImg} alt="user" />
      <div className="user__block">
        <div className="user__row-in-name">
          <h3 className="user__name">Jhon Doe</h3>
          <span className="user__time">6:18 PM</span>
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
