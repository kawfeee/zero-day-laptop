import React from "react";
import "../styles/WorkflowSections.css";
import transferIcon from "../assets/svg/transfer.svg";
import transferArrow from "../assets/svg/transfer-arrow.svg";
import policyIcon from "../assets/svg/policy.svg";

const WorkflowSections = () => {
  const handleTransferWorkflow = () => {
    console.log("Transfer Workflow clicked");
    // Add your transfer workflow logic here
  };

  const handleViewPolicies = () => {
    console.log("View Policies clicked");
    // Add your view policies logic here
  };

  return (
    <div className="workflow-sections">
      <div className="workflow-item transfer-workflow" onClick={handleTransferWorkflow}>
        <div className="workflow-icon"><img src={transferIcon} alt="Transfer" /></div>
        <span className="workflow-text">Transfer Workflow</span>
        <div className="workflow-arrow"><img src={transferArrow} alt="Arrow" /></div>
      </div>

      <div className="workflow-item view-policies" onClick={handleViewPolicies}>
        <div className="workflow-icon"><img src={policyIcon} alt="Policy" /></div>
        <span className="workflow-text">View Policies</span>
      </div>
    </div>
  );
};

export default WorkflowSections;
