import React from "react";
import Link from "react-router-dom";
import "./header.css";

const logo = () => {
  return (
    <React.Fragment>
      <Link to="/fe-diplom-ver2" className="logo-container" id="startLogo">
        Лого
      </Link>
    </React.Fragment>
  );
};

export default logo;