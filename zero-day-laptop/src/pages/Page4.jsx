import React from "react";
import leftArrow2 from "../assets/svg/left-arrow2.svg";
import Navbar from "../components/Navbar";
import "../styles/Header.css";
import EmployeeProfile from "../components/EmployeeProfile";
import RequiredInfo from "../components/RequiredInfo";
import ITCheckList from "../components/ITCheckList";
import ITCommentsPage4 from "../components/ITCommentsPage4";
import WorkflowSectionsPage2 from "../components/WorkflowSectionsPage2";
import "../styles/MainContentSection.css";

const Page4 = () => {
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
      <div className="avatars-container">
        <div className="header-section">
          <div className="breadcrumb">My Workspace {">"} Zero Day Laptop</div>
          <div className="main-header">
            <button aria-label="Back" onClick={() => window.history.back()} className="back-arrow" style={{ border: "none", background: "transparent", padding: 0, marginRight: 8 }}>
              <img src={leftArrow2} alt="Back" width={24} height={24} />
            </button>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
              <span style={{ fontSize: 24, fontWeight: 700, color: "#101928" }}>Zero Day Laptop</span>
              <span style={{ fontSize: 16, fontWeight: 600, color: "#101928" }}>- IT Helpdesk Checklist</span>
            </div>
          </div>
        </div>

        <EmployeeProfile employee={employeeData} />
        <RequiredInfo />
        
        {/* Content below Required Information matching the main page layout */}
        <div className="main-content-section">
          <ITCheckList />
          <ITCommentsPage4 defaultValue="Completed" />
          <WorkflowSectionsPage2 />
        </div>
      </div>
    </>
  );
};

export default Page4;
