import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import EmployeeProfile from "../components/EmployeeProfile";
import RequiredInfo from "../components/RequiredInfo";
import EmployeeInformation from "../components/EmployeeInformation";
import TaskList from "../components/TaskList";
import ITTaskList from "../components/ITTaskList";
import ITRemarks from "../components/ITRemarks";
import "../styles/SubmissionOverrides.css";

const SubmissionBlank = () => {
  const employeeData = {
    initials: "MK",
    name: "Manoj Kandan M",
    genId: "255048778",
    email: "Manoj.kandan@partner.samsung.com",
    designation: "Outsourcing",
    division:
      "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
    location: "Bangalore",
    manager: "Ravindra S R (06786669)",
    isOnline: true,
  };

  return (
    <>
      <Navbar />
      <div className="avatars-container main-page">
        <Header
          breadcrumb="My Workspace > Zero Day Laptop"
          title="Zero Day Laptop - DC Submission"
          showBackArrow={false}
        />

        <EmployeeProfile employee={employeeData} />
        <RequiredInfo />
        {/* Render sections individually to insert IT Remarks below IT Task List */}
        <div className="main-content-section">
          <EmployeeInformation readOnly={true} />
          <TaskList readOnly={true} />
          <ITTaskList />
          <ITRemarks />
        </div>
      </div>
    </>
  );
};

export default SubmissionBlank;


