import React from "react";
import "../styles/ITTaskList.css";
import saveAsDraftIcon from "../assets/svg/save-as-draft.svg";

const ITTaskList = () => {
  const itTasks = [
    {
      serviceName: "Verify IT Checklist",
      prerequisite: "Corp ID, Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetail: "IT/DC to verify",
      taskStatus: "Completed",
      remarks: ""
    },
    {
      serviceName: "Perforce Installation & Access",
      prerequisite: "Unified ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetail: "IT to install SW / DC to verify",
      taskStatus: "Completed",
      remarks: ""
    },
    {
      serviceName: "Escort, Nasca, SLAM / Secuprint Registration",
      prerequisite: "Corp ID, Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetail: "IT/DC to verify",
      taskStatus: "Completed",
      remarks: ""
    },
    {
      serviceName: "Zscaler and Drivestrike for SVPN Laptops",
      prerequisite: "Corp ID, Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetail: "IT/DC to verify",
      taskStatus: "Completed",
      remarks: ""
    },
    {
      serviceName: "SVPN/VDI & CORP Profile",
      prerequisite: "Corp ID, Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetail: "IT/DC to verify",
      taskStatus: "Completed",
      remarks: ""
    },
    {
      serviceName: "PDF doc open default with PDF reader",
      prerequisite: "Corp ID, Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetail: "IT/DC to verify",
      taskStatus: "Completed",
      remarks: ""
    },
    {
      serviceName: "MS Teams Request",
      prerequisite: "Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetail: "IT/DC to verify",
      taskStatus: "Completed",
      remarks: ""
    },
    {
      serviceName: "Printer Installation",
      prerequisite: "Corp ID, Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetail: "IT/DC to verify",
      taskStatus: "Completed",
      remarks: ""
    },
    {
      serviceName: "Asset Tagging",
      prerequisite: "Corp ID, Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetail: "IT/DC to verify",
      taskStatus: "Completed",
      remarks: ""
    }
  ];

  return (
    <div className="it-task-list">
      <div className="it-task-list-header">
        <h2 className="section-title">IT Task List (Status)</h2>
        <img src={saveAsDraftIcon} alt="Save as Draft" className="save-as-draft-icon" />
      </div>
      
      <div className="table-container">
        <table className="it-task-table">
          <thead>
            <tr className="table-header">
              <th>Service Name</th>
              <th>Prerequisite</th>
              <th>Required Action</th>
              <th>Action Type</th>
              <th>Action Detail</th>
              <th>Task Status</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {itTasks.map((task, index) => (
              <tr key={index} className="table-row">
                <td>{task.serviceName}</td>
                <td>{task.prerequisite}</td>
                <td>{task.requiredAction}</td>
                <td>{task.actionType}</td>
                <td>{task.actionDetail}</td>
                <td>{task.taskStatus}</td>
                <td>{task.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ITTaskList;
