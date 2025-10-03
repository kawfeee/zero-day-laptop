import React from "react";
import "../styles/ZeroDayEmployeeList.css";
import statusSlider from "../assets/svg/status.svg";

const ZeroDayEmployeeList = () => {


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
      <div className="status-selector-section">
        <div className="status-label-row">
          <span className="status-label">Status <span style={{ color: 'red' }}>*</span></span>
        </div>
        <div className="status-slider-row">
          <img src={statusSlider} alt="Status slider" className="status-slider-img" />
        </div>
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
                <td style={index === 0 ? { color: '#36A8DE' } : {}}>{employee.gen}</td>
                <td style={index === 0 ? { color: '#36A8DE' } : {}}>{employee.employeeName}</td>
                <td style={index === 0 ? { color: '#36A8DE' } : {}}>{employee.knoxEmail}</td>
                <td style={index === 0 ? { color: '#36A8DE' } : {}}>{employee.joiningDate}</td>
                <td className="department-cell" style={index === 0 ? { color: '#36A8DE' } : {}}>{employee.departmentName}</td>
                <td>
                  <button className="it-engineer-link" style={index === 0 ? { color: '#36A8DE' } : {}}>
                    {employee.itEngineerName}
                  </button>
                </td>
                <td style={index === 0 ? { color: '#36A8DE' } : {}}>{employee.itSubmissionOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ZeroDayEmployeeList;
