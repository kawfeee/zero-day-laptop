import React, { useState } from "react";
import "../styles/CommentSections.css";
import submitIcon from "../assets/svg/submit.svg";
import backIcon from "../assets/svg/back.svg";

const ITCommentsPage4 = ({ defaultValue = "Completed" }) => {
  const [comment, setComment] = useState(defaultValue);
  const handleBack = () => window.history.back();
  const handleSubmit = () => { window.location.href = "/submitted"; };

  return (
    <div className="comment-sections">
      <div className="comment-container">
        <div className="comment-section">
          <h3 className="comment-title">IT Comments</h3>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="comment-textarea it-comment-textarea"
            rows={4}
          />
        </div>
      </div>
      <div className="submit-section" style={{ gap: "12px" }}>
        <button className="submit-button" onClick={handleBack}>
          <img src={backIcon} alt="Back" className="submit-icon" />
        </button>
        <button className="submit-button" onClick={handleSubmit}>
          <img src={submitIcon} alt="Submit" className="submit-icon" />
        </button>
      </div>
    </div>
  );
};

export default ITCommentsPage4;
