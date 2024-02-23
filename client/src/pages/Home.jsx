import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import PostSection from "../components/PostSection";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto  ">
      <div className="px-2 grid grid-cols-6 overflow-auto">
        <div className=" px-4 py-5 border-x ">
          <LeftSidebar />
        </div>

        <div className="col-span-4 pb-4 overflow-y-auto max-h-[calc(100vh-70px)] shadow shs">
          <div className="">
            <PostSection />
          </div>
        </div>
        <div className=" px-4 py-5 border-x">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
