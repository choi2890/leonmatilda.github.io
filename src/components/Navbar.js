import React from "react";

const Navbar = ({ setActiveTab, activeTab }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className={`navbar-item ${activeTab === "about" ? "active" : ""}`}>
          <button className="navbar-link" onClick={() => setActiveTab("about")}>
            About
          </button>
        </li>
        <li className={`navbar-item ${activeTab === "resume" ? "active" : ""}`}>
          <button
            className="navbar-link"
            onClick={() => setActiveTab("resume")}
          >
            Resume
          </button>
        </li>
        <li
          className={`navbar-item ${activeTab === "portfolio" ? "active" : ""}`}
        >
          <button
            className="navbar-link"
            onClick={() => setActiveTab("portfolio")}
          >
            Portfolio
          </button>
        </li>
        <li className={`navbar-item ${activeTab === "blog" ? "active" : ""}`}>
          <button className="navbar-link" onClick={() => setActiveTab("blog")}>
            Blog
          </button>
        </li>
        <li
          className={`navbar-item ${activeTab === "contact" ? "active" : ""}`}
        >
          <button
            className="navbar-link"
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
