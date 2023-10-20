import React from "react";
import Card from "../Main/cardsBlock/card";
import {CardTop, CardBottom, CardBody} from "../Main/cardsBlock/cardsMolecules";
import Button from "../atoms/atoms";
import icon_info from "../../img/howItWorks/icon_info.svg";
import icon_error from "../../img/loading/icon_error.svg";
import nanoid from "nanoid";

const info = ({type, text, onClick}) => {
  return (
    <React.Fragment>
      <Card id={nanoid()} className={"active " + type}>
        <CardTop
          className={type + "_card-top"}
          icon={type === "info" ? icon_info : icon_error}
        />

        <CardBody className={type + "_card-body"}>
          <div className={type + "_block-text"}>
            <p className={type + "-text"}>{text}</p>
          </div>
        </CardBody>
        
        <CardBottom className={type + "_card"}>
          <Button
            type="modal"
            className="modal_control"
            text="Понятно"
            onClick={onClick}
          />
        </CardBottom>
      </Card>
    </React.Fragment>
  );
};

export default info;