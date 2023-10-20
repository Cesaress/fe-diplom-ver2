import React from "react";
import GoBackBlock from "../molecules/selectionWagon/goBackBlock";
import Card from "../main/cardsBlock/card";
import {CardBody, CardBottom, CardTop} from "../main/cardsBlock/cardsMolecules";

const trailDetails = ({className, data}) => {
  if (!data) {
    return;
  }

  return (
    <React.Fragment>
      <div className={className + "_details"}>
        <GoBackBlock className={className} type={" come-back"} />
        <Card data={data} className={"trains-block"}>
          <CardTop className={"trains-block_card-top"} data={data} />
          <CardBody className={"trains-block_body"} data={data} />
          <CardBottom className={"trains-block"} data={data.duration} />
        </Card>
      </div>
    </React.Fragment>
  );
};

export default trailDetails;