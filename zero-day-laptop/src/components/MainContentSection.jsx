import React from "react";
import "../styles/MainContentSection.css";
import EmployeeInformation from "./EmployeeInformation";
import TaskList from "./TaskList";
import ITTaskList from "./ITTaskList";
import CommentSections from "./CommentSections";
import WorkflowSections from "./WorkflowSections";

const MainContentSection = ({ readOnly = false, showComments = true }) => {
  return (
    <div className="main-content-section">
      <EmployeeInformation readOnly={readOnly} />
      <TaskList readOnly={readOnly} />
      <ITTaskList />
      {showComments && <CommentSections />}
      <WorkflowSections />
    </div>
  );
};

export default MainContentSection;
