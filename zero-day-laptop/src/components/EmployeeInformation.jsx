import React, { useState } from "react";
import "../styles/EmployeeInformation.css";

const EmployeeInformation = ({ readOnly = false }) => {
  const [projectName, setProjectName] = useState("");

  return (
    <div className="employee-information">
      <div className="employee-info-header">
        <h2 className="section-title">Employee Information</h2>
      </div>
      
      <div className="table-container">
        <table className="employee-table">
          <thead>
            <tr className="table-header">
              <th>Employee Name</th>
              <th>Dept. Name</th>
              <th>Gen ID</th>
              <th>RM Name</th>
              <th>Knox Email ID</th>
              <th>IT Engineer</th>
              <th>Joining Date</th>
              <th>Project Name</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td>Amritanjan Kumar</td>
              <td>Network Call & OAM Team\Call S/W Group</td>
              <td>25504878</td>
              <td>Lead Engineer</td>
              <td>s.dangare@partner.samsung.com</td>
              <td>05-Jun-2023</td>
              <td>05-Jun-2023</td>
              <td>
                {readOnly ? (
                  <span></span>
                ) : (
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Type your Project Name"
                    className="project-name-input"
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

export default EmployeeInformation;
