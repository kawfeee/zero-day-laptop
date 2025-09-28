import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
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
        <Header
          breadcrumb="My Workspace > Zero Day Laptop"
          title="Zero Day Laptop - DC Submission"
          showBackArrow={false}
        />

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
