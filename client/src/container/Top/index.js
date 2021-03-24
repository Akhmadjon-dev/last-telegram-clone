import React from "react";
import { GrFormClose } from "react-icons/gr";
import {  BiWindows } from "react-icons/bi";
import {  FaWindowMinimize } from "react-icons/fa";
const Index = () => {
  return (
    <div className="top">
      <div className="top__icons">
        <div className="top__icon">
          <FaWindowMinimize />
        </div>
        <div className="top__icon">
          <BiWindows />
        </div>
        <div className="top__icon">
          <GrFormClose />
        </div>
      </div>
    </div>
  );
};

export default Index;
