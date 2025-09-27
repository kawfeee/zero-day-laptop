import React, { useState } from "react";
import "../styles/ITRemarks.css";

const ITRemarks = () => {
  const [remarks, setRemarks] = useState("");

  const handleRemarksChange = (e) => {
    setRemarks(e.target.value);
  };

  return (
    <div className="it-remarks">
      <div className="it-remarks-title">IT Remarks</div>
      <textarea
        className="it-remarks-box"
        value={remarks}
        onChange={handleRemarksChange}
        placeholder="Check and Verified..."
      />
    </div>
  );
};

export default ITRemarks;


