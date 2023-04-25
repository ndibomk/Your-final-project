import React from "react";

const ShowMembers = ({ member }) => {
  let roleClasses = "";

  if (member && member.role === "coordinator") {
    roleClasses = "coordinator-level";
  } else if (member && member.role === "supervisor") {
    roleClasses = "supervisor-level";
  } else {
    roleClasses = "";
  }
  return (
    <div className="member">
      <span>
    <input type="text"  placeholder="link"/>
      </span>
    </div>
  );
};

export default ShowMembers;
