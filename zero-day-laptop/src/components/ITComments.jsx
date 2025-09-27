import React, { useState } from "react";
import "../styles/ITComments.css";

const ITComments = ({ text = "Completed" }) => {
  const [comment, setComment] = useState(text);

  return (
    <div className="it-comments">
      <div className="it-comments-header">
        <h2 className="section-title">IT Comments</h2>
      </div>
      <div className="it-comments-content">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="it-comments-input"
          placeholder="Enter IT comments..."
        />
      </div>
    </div>
  );
};

export default ITComments;
