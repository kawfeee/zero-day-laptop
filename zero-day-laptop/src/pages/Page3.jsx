import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import EmployeeProfile from "../components/EmployeeProfile";
import RequiredInfo from "../components/RequiredInfo";
import ZeroDayEmployeeList from "../components/ZeroDayEmployeeList";
import WorkflowSectionsPage2 from "../components/WorkflowSectionsPage2";

const Page3 = () => {
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
          <ZeroDayEmployeeList />
          <WorkflowSectionsPage2 />
        </div>
      </div>
    </>
  );
};

export default Page3;
