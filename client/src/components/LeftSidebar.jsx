import React from "react";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="space-y-3 flex flex-col text-2xl">
      <NavLink to="#">Recent</NavLink>
      <NavLink to="#">Recent</NavLink>
    </div>
  );
};

export default LeftSidebar;
