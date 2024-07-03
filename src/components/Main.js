import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";

const Main = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "portfolio":
        return <Portfolio />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="main-content flex-1 ml-52 mt-4 bg-gray-100 border border-gray-800 rounded-2xl p-4 shadow-lg min-h-screen">
        <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
        <div className="content-wrapper h-full">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Main;
