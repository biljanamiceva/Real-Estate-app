import React from "react";
import "./Footer1.css";

const Footer1 = () => {
  return (
    <div className="app__footer section__padding">
      <div className="app__footer_info">
        <h1 className="headtext__footer" style={{ marginBottom: "3rem" }}>
          Become a real estate <span className="app__footer-title">agent</span>
        </h1>
        <p className="p__footer-subtitle">
          We only work with the best companies across the globe
        </p>
      </div>
      <div className="app__footer-button">
        <button>Register Now </button>
      </div>
    </div>
  );
};

export default Footer1;
