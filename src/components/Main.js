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
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
        {renderContent()}
      </div>
    </div>
  );
};

export default Main;
