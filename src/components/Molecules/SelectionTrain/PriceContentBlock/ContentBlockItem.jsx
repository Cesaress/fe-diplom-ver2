import React from "react";

const contentBlockItem = ({className, children}) => {
   
  return (
    <React.Fragment>
      <div className={className + "-item"}>
        {children}
      </div>
    </React.Fragment>
  );
};

export default contentBlockItem;