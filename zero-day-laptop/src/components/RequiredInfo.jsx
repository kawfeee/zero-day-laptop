import React from "react";
import "../styles/RequiredInfo.css";
import reqInfoIcon from "../assets/svg/req-info.svg";

const RequiredInfo = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info ${className}`} onClick={onClick}>
      <img src={reqInfoIcon} alt="Required Info" className="clipboard-icon" />
      <span className="required-text">Required Information</span>
    </div>
  );
};

export default RequiredInfo;
