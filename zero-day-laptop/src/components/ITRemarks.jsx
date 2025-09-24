import React from "react";
import "../styles/ITRemarks.css";

const ITRemarks = ({ text = "Check and Verified..." }) => {
  return (
    <div className="it-remarks">
      <div className="it-remarks-title">IT Remarks</div>
      <div className="it-remarks-box">{text}</div>
    </div>
  );
};

export default ITRemarks;


