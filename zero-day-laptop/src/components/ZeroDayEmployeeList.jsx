import React, { useState } from "react";
import "../styles/ZeroDayEmployeeList.css";

const ZeroDayEmployeeList = () => {
  const [selectedStatus, setSelectedStatus] = useState("Approved");

  const statusOptions = ["Approved", "Pending", "Rejected", "Terminated"];

  const employees = [
    {
      gen: "24518236",
      employeeName: "Shraddha Teresa Job",
      knoxEmail: "Shraddha.job@Partner.samsung.com",
      joiningDate: "12-Jul-2024",
      departmentName: "People Team\\People & Culture Group\\People Development",
      itEngineerName: "Select IT Engineer",
      itSubmissionOn: ""
    },
    {
      gen: "24518236",
      employeeName: "Shraddha Teresa Job",
      knoxEmail: "Shraddha.job@Partner.samsung.com",
      joiningDate: "12-Jul-2024",
      departmentName: "People Team\\People & Culture Group\\People Development",
      itEngineerName: "Select IT Engineer",
      itSubmissionOn: ""
    },
    {
      gen: "24518236",
      employeeName: "Shraddha Teresa Job",
      knoxEmail: "Shraddha.job@Partner.samsung.com",
      joiningDate: "12-Jul-2024",
      departmentName: "People Team\\People & Culture Group\\People Development",
      itEngineerName: "Select IT Engineer",
      itSubmissionOn: ""
    },
    {
      gen: "24518236",
      employeeName: "Shraddha Teresa Job",
      knoxEmail: "Shraddha.job@Partner.samsung.com",
      joiningDate: "12-Jul-2024",
      departmentName: "People Team\\People & Culture Group\\People Development",
      itEngineerName: "Select IT Engineer",
      itSubmissionOn: ""
    },
    {
      gen: "24518236",
      employeeName: "Shraddha Teresa Job",
      knoxEmail: "Shraddha.job@Partner.samsung.com",
      joiningDate: "12-Jul-2024",
      departmentName: "People Team\\People & Culture Group\\People Development",
      itEngineerName: "Select IT Engineer",
      itSubmissionOn: ""
    },
    {
      gen: "24518236",
      employeeName: "Shraddha Teresa Job",
      knoxEmail: "Shraddha.job@Partner.samsung.com",
      joiningDate: "12-Jul-2024",
      departmentName: "People Team\\People & Culture Group\\People Development",
      itEngineerName: "Select IT Engineer",
      itSubmissionOn: ""
    },
    {
      gen: "24518236",
      employeeName: "Shraddha Teresa Job",
      knoxEmail: "Shraddha.job@Partner.samsung.com",
      joiningDate: "12-Jul-2024",
      departmentName: "People Team\\People & Culture Group\\People Development",
      itEngineerName: "Select IT Engineer",
      itSubmissionOn: ""
    }
  ];

  return (
    <div className="zero-day-employee-list">
      <div className="employee-list-header">
        <h2 className="section-title">Zero Day Employee List</h2>
      </div>
      
      <div className="status-filters">
        <span className="status-label">Status</span>
        {statusOptions.map((status) => (
          <button
            key={status}
            className={`status-filter ${selectedStatus === status ? 'active' : ''}`}
            onClick={() => setSelectedStatus(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="table-container">
        <table className="employee-list-table">
          <thead>
            <tr className="table-header">
              <th>GEN</th>
              <th>Employee Name</th>
              <th>Knox Email</th>
              <th>Joining Date</th>
              <th>Department Name</th>
              <th>IT Engineer Name</th>
              <th>IT Submission On</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className="table-row">
                <td>{employee.gen}</td>
                <td>{employee.employeeName}</td>
                <td>{employee.knoxEmail}</td>
                <td>{employee.joiningDate}</td>
                <td className="department-cell">{employee.departmentName}</td>
                <td>
                  <button className="it-engineer-link">
                    {employee.itEngineerName}
                  </button>
                </td>
                <td>{employee.itSubmissionOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ZeroDayEmployeeList;
