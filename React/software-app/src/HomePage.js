import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  return (
    <div className="page home-page">
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>

      <div className="buttons">
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/certifications")}>Certifications</button>
      </div>

      <div className="socials">
        <h3>Connect with me:</h3>
        <a
          href="https://www.linkedin.com/in/bartolomeo-gisone-761769174/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/bartgisone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
