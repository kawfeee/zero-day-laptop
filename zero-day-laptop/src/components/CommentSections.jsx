import React, { useState } from "react";
import "../styles/CommentSections.css";
import submitIcon from "../assets/svg/submit.svg";

const CommentSections = () => {
  const [itComment, setItComment] = useState("Completed");
  const [userComment, setUserComment] = useState("");

  const handleSubmit = () => {
    // Navigate to new blank page
    window.location.hash = "#/submitted";
  };

  return (
    <div className="comment-sections">
      <div className="comment-container">
        <div className="comment-section">
          <h3 className="comment-title">IT Comment</h3>
          <textarea
            value={itComment}
            onChange={(e) => setItComment(e.target.value)}
            className="comment-textarea it-comment-textarea"
            rows={4}
          />
        </div>

        <div className="comment-section">
          <h3 className="comment-title">Comment (Max 500 Chars)</h3>
          <textarea
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            placeholder="xxx-xxx-xx-xxx-x"
            className="comment-textarea user-comment-textarea"
            rows={4}
            maxLength={500}
          />
        </div>
      </div>

      <div className="submit-section">
        <button className="submit-button" onClick={handleSubmit}>
          <img src={submitIcon} alt="Submit" className="submit-icon" />
        </button>
      </div>
    </div>
  );
};

export default CommentSections;
