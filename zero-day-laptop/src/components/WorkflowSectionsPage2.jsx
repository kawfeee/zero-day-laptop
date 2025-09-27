import React from "react";
import "../styles/WorkflowSections.css";
import policyIcon from "../assets/svg/policy.svg";

const WorkflowSectionsPage2 = () => {
  const handleViewPolicies = () => {
    console.log("View Policies clicked");
    // Add your view policies logic here
  };

  return (
    <div className="workflow-sections">
      <div className="workflow-item view-policies" onClick={handleViewPolicies}>
        <div className="workflow-icon"><img src={policyIcon} alt="Policy" /></div>
        <span className="workflow-text">View Policies</span>
      </div>
    </div>
  );
};

export default WorkflowSectionsPage2;