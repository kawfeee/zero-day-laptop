import React from "react";
import "../styles/ActionButtons.css";

const ActionButtons = () => {
  const handleBack = () => {
    console.log("Back button clicked");
    // Add back navigation logic here
  };

  const handleSubmit = () => {
    console.log("Submit button clicked");
    // Add submit logic here
  };

  return (
    <div className="action-buttons">
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ActionButtons;
