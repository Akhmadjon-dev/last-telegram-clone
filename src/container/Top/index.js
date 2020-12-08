import React from "react";
import { GrFormClose } from "react-icons/gr";
import { BiCheckbox } from "react-icons/bi";
import { FaRegWindowMinimize } from "react-icons/fa";
const Index = () => {
  return (
    <div className="top">
      <div className="top__icons">
        <div className="top__icon">
          <FaRegWindowMinimize />
        </div>
        <div className="top__icon">
          <BiCheckbox />
        </div>
        <div className="top__icon">
          <GrFormClose />
        </div>
      </div>
    </div>
  );
};

export default Index;
