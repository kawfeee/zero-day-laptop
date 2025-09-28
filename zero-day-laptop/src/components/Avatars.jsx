import React from "react";
import "../styles/Avatars.css";
import leftArrow2 from "../assets/svg/left-arrow2.svg";
import EmployeeProfile from "./EmployeeProfile";
import RequiredInfo from "./RequiredInfo";
import MainContentSection from "./MainContentSection";
// import TrainingVideos from "./TrainingVideos";

const Avatars = () => {
  // Event handlers for all clickable components
  const handleBackClick = () => {
    console.log("Back button clicked");
    // Add your navigation logic here
  };

  const handleClockClick = () => {
    console.log("Clock icon clicked");
    // Add your clock/time logic here
  };

  const handleAvatarClick = () => {
    console.log("Avatar clicked");
    // Add your avatar click logic here
  };

  const handleNameClick = () => {
    console.log("Name clicked");
    // Add your name click logic here
  };

  const handleEmailClick = () => {
    console.log("Email clicked");
    // Add your email click logic here
  };

  const handleRequiredInfoClick = () => {
    console.log("Required Information clicked");
    // Add your required info click logic here
  };

  const handleDesignationClick = () => {
    console.log("Designation clicked");
    // Add your designation click logic here
  };

  const handleDivisionClick = () => {
    console.log("Division clicked");
    // Add your division click logic here
  };

  const handleLocationClick = () => {
    console.log("Location clicked");
    // Add your location click logic here
  };

  const handleManagerClick = () => {
    console.log("Manager clicked");
    // Add your manager click logic here
  };

  // Employee data object
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
    <div className="avatars-container">

      <div className="header-section" style={{ marginBottom: 24 }}>
        <div className="breadcrumb">My Workspace &gt; Zero Day Laptop</div>
        <div className="main-header" style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <button aria-label="Back" onClick={handleBackClick} className="back-arrow" style={{ border: 'none', background: 'transparent', padding: 0, marginRight: 8 ,}}>
            <img src={leftArrow2} alt="Back" width={24} height={24} />
          </button>
          <span style={{ fontSize: 24, fontWeight: 700, color: '#101928' }}>Zero Day Laptop</span>
          <span style={{ fontSize: 16, fontWeight: 600, color: '#101928' }}>- DC Submission</span>
        </div>
      </div>

      <EmployeeProfile
        employee={employeeData}
        onAvatarClick={handleAvatarClick}
        onNameClick={handleNameClick}
        onEmailClick={handleEmailClick}
        onDesignationClick={handleDesignationClick}
        onDivisionClick={handleDivisionClick}
        onLocationClick={handleLocationClick}
        onManagerClick={handleManagerClick}
      />

      <RequiredInfo onClick={handleRequiredInfoClick} />

      <MainContentSection />

      {/* <TrainingVideos /> */}
    </div>
  );
};

export default Avatars;
