import React from "react";
import NavBar from "./navBar";
import Logo from "./logo";
import "./header.css";
import nanoid from "nanoid";

const header = () => {

  return (
    <React.Fragment>
      <header className="container-fluid header">
        <div className="row">
          <div className="col col-md">
            <div className="header-top">
              <Logo key={nanoid()} />
            </div>
            <NavBar key={nanoid()} />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default header;
