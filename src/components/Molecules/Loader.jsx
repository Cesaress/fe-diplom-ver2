import React from "react";
import MySvgIcon from "../atoms/atoms";
import ic_loading_train from "../../img/loading/ic_loading_train.svg";
import ic_loading_line from "../../img/loading/ic_loading_line.svg";

const loader = () => {
  return (
    <React.Fragment>
      <div className="loader_block">
        <span className="loader-text text-center">Идет поиск</span>
        <div className="icons_block">
          <MySvgIcon
            type="train"
            className={"loader"}
            icon={ic_loading_train}
          />

          <MySvgIcon
            type="line"
            className={"loader"}
            icon={ic_loading_line}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default loader;