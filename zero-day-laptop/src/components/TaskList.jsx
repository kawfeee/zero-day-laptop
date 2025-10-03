import React, { useState } from "react";
import "../styles/TaskList.css";


const TaskList = ({ readOnly = false }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [remarks, setRemarks] = useState("");

  const handleHeaderCheckboxChange = () => {
    setAllChecked(!allChecked);
    setIsChecked(!allChecked);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (allChecked && isChecked) setAllChecked(false);
  };

  return (
    <div className="task-list">
      <div className="task-list-header">
        <h2 className="section-title">Task List</h2>
      </div>
      
      <div className="table-container">
        <table className="task-table">
          <thead>
            <tr className="table-header">
              <th className="checkbox-column">
                <input
                  type="checkbox"
                  className="table-checkbox"
                  aria-label="Select all tasks"
                  checked={allChecked}
                  onChange={handleHeaderCheckboxChange}
                />
              </th>
              <th>Service Name</th>
              <th>Prerequisite</th>
              <th>Required Action</th>
              <th>Action Type</th>
              <th>Action Detail</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="checkbox-column">
                <input
                  type="checkbox"
                  checked={allChecked || isChecked}
                  onChange={handleCheckboxChange}
                  className="table-checkbox"
                  aria-label="Select task Verify IT Checklist"
                />
              </td>
              <td><span className="service-name-text">Verify IT Checklist</span></td>
              <td>[No Prerequisite]</td>
              <td>Verify if all SW are installed</td>
              <td>Check</td>
              <td>DC: Once IT Closed the New Joiners Checklist WF, verify and update checklist in current WF</td>
              <td>
                {readOnly ? (
                  <span></span>
                ) : (
                  <input
                    type="text"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    placeholder="XXX-XX-XXX--X"
                    className="remarks-input"
                  />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
