import React from "react";

const card = ({id,className, children}) => {

  return (
    <React.Fragment>
      <div id={id} className={className + "_card card"}>{children}</div>
    </React.Fragment>
  );
};

export default card;