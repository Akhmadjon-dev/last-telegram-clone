import React from "react";
import { GrFormClose } from "react-icons/gr";
import { BiCheckbox, BiWindows } from "react-icons/bi";
import { FaRegWindowMinimize, FaWindowMinimize } from "react-icons/fa";
const Index = () => {
  return (
    <div className="top">
      <div className="top__icons">
        <div className="top__icon">
          {/* <FaRegWindowMinimize /> */}
          <FaWindowMinimize />
        </div>
        <div className="top__icon">
          {/* <BiCheckbox /> */}
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
