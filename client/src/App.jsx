import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="max-w-screen max-h-screen  ">
        <Navbar />
        <Home />
      </div>
    </>
  );
};

export default App;
