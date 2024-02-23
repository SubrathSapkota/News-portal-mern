import React from "react";
import { NavLink } from "react-router-dom";

const RightSidebar = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-3 flex flex-col text-2xl">
        <NavLink to="#">Sports</NavLink>
        <NavLink to="#">Politics</NavLink>
      </div>
    </div>
  );
};

export default RightSidebar;
