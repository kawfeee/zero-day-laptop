import React, { useState } from "react";
import "../styles/ITCheckList.css";

const ITCheckList = () => {
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [individualChecks, setIndividualChecks] = useState(Array(8).fill(true));

  const handleSelectAll = () => {
    const newValue = !isAllChecked;
    setIsAllChecked(newValue);
    setIndividualChecks(Array(8).fill(newValue));
  };

  const handleIndividualCheck = (index) => {
    const newChecks = [...individualChecks];
    newChecks[index] = !newChecks[index];
    setIndividualChecks(newChecks);
    
    // Update select all based on individual checks
    const allChecked = newChecks.every(check => check);
    setIsAllChecked(allChecked);
  };

  const itTasks = [
    {
      serviceName: "Github, Perforce id Creation",
      prerequisite: "Corp ID, Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetails: "IT/DC to Verify",
      remarks: ""
    },
    {
      serviceName: "Github, Perforce id Creation",
      prerequisite: "Corp ID, Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetails: "IT/DC to Verify",
      remarks: ""
    },
    {
      serviceName: "Github, Perforce id Creation",
      prerequisite: "Corp ID, Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetails: "IT/DC to Verify",
      remarks: ""
    },
    {
      serviceName: "Github, Perforce id Creation",
      prerequisite: "Corp ID, Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetails: "IT/DC to Verify",
      remarks: ""
    },
    {
      serviceName: "Github, Perforce id Creation",
      prerequisite: "Corp ID, Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetails: "IT/DC to Verify",
      remarks: ""
    },
    {
      serviceName: "Github, Perforce id Creation",
      prerequisite: "Corp ID, Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetails: "IT/DC to Verify",
      remarks: ""
    },
    {
      serviceName: "Github, Perforce id Creation",
      prerequisite: "Corp ID, Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetails: "IT/DC to Verify",
      remarks: ""
    },
    {
      serviceName: "Github, Perforce id Creation",
      prerequisite: "Corp ID, Knox ID",
      requiredAction: "Default Assignment",
      actionType: "Check",
      actionDetails: "IT/DC to Verify",
      remarks: ""
    }
  ];

  return (
    <div className="it-check-list">
      <div className="it-check-list-header">
        <h2 className="section-title">IT Check List</h2>
      </div>
      
      <div className="table-container">
        <table className="it-check-table">
          <thead>
            <tr className="table-header">
              <th className="checkbox-column">
                <input 
                  type="checkbox" 
                  className="table-checkbox" 
                  checked={isAllChecked}
                  onChange={handleSelectAll}
                  aria-label="Select all tasks" 
                />
              </th>
              <th>Service Name</th>
              <th>Prerequisite</th>
              <th>Required Action</th>
              <th>Action Type</th>
              <th>Action Details</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {itTasks.map((task, index) => (
              <tr key={index} className="table-row">
                <td className="checkbox-column">
                  <input
                    type="checkbox"
                    checked={individualChecks[index]}
                    onChange={() => handleIndividualCheck(index)}
                    className="table-checkbox"
                    aria-label={`Select task ${task.serviceName}`}
                  />
                </td>
                <td><span className="service-name-text">{task.serviceName}</span></td>
                <td>{task.prerequisite}</td>
                <td>{task.requiredAction}</td>
                <td>{task.actionType}</td>
                <td>{task.actionDetails}</td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ITCheckList;
