import React from "react";
import leftArrow2 from "../assets/svg/left-arrow2.svg";
import Navbar from "../components/Navbar";
import "../styles/Header.css";
import EmployeeProfile from "../components/EmployeeProfile";
import RequiredInfo from "../components/RequiredInfo";
import EmployeeInformation from "../components/EmployeeInformation";
import TaskList from "../components/TaskList";
import ITTaskList from "../components/ITTaskList";
import ITRemarks from "../components/ITRemarks";
import WorkflowSectionsPage2 from "../components/WorkflowSectionsPage2";
import "../styles/Page2Overrides.css";

const Page2 = () => {
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
      <div className="avatars-container page2">
        <div className="header-section">
          <div className="breadcrumb">My Workspace {">"} Zero Day Laptop</div>
          <div className="main-header">
            <button aria-label="Back" onClick={() => window.history.back()} className="back-arrow" style={{ border: "none", background: "transparent", padding: 0, marginRight: 8 }}>
              <img src={leftArrow2} alt="Back" width={24} height={24} />
            </button>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
              <span style={{ fontSize: 24, fontWeight: 700, color: "#101928" }}>Zero Day Laptop</span>
              <span style={{ fontSize: 16, fontWeight: 600, color: "#101928" }}>- Report</span>
            </div>
          </div>
        </div>

        <EmployeeProfile employee={employeeData} />
        <RequiredInfo />
        
        {/* Content below Required Information matching the image */}
        <div className="main-content-section">
          <EmployeeInformation readOnly={true} />
          <TaskList readOnly={true} />
          <ITTaskList showSaveAsDraft={false} />
          <ITRemarks text="Check and Verified..." />
          <WorkflowSectionsPage2 />
        </div>
      </div>
    </>
  );
};

export default Page2;
