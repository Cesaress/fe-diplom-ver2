import React from "react";
import useSelector from "react-redux";
import CardBody from "../main/cardsBlock/cardsMolecules";
import TrailsData from "../Molecules/SelectionTrain/trailsData";
import capitalizeFirstLetter from "../../utils/trainSelectionUtils";
import icon_yellow_arrow_right from "../../img/selectionTrain/icon_yellow-arrow-right.svg";

const tripDetails = () => {
  const {selectedTrain} = useSelector((state) => state.catalogTrains);
  console.log(selectedTrain, "selectedTrain");
  const dataTrain = {
    duration: selectedTrain.duration,

    from: {
      trainName: selectedTrain.train.name,
      name: selectedTrain.from.city.name,
      datetime: selectedTrain.from.datetime,
      railway_station_name: selectedTrain.from.railway_station_name,
    },
    to: {
      name: selectedTrain.to.city.name,
      datetime: selectedTrain.to.datetime,
      railway_station_name: selectedTrain.to.railway_station_name,
    },
  };
  return (
    <React.Fragment>
      <div className="order-details">
        <div className="order-details_side-block_top">
          <div className="side-block_train-number">
            <span className="side-block_train-text">№ поезда</span>
            <span className="side-block_train-text strong-text">116С</span>
          </div>
          <div className="side-block_train-name">
            <span className="side-block_train-text">Название</span>
            <div className="side-block_text-name_wrap">
              <span className="side-block_train-text strong-text-name">
                {capitalizeFirstLetter(selectedTrain.from.city.name)}
              </span>
              <span className="side-block_train-text strong-text-name">
                {capitalizeFirstLetter(selectedTrain.to.city.name)}
              </span>
            </div>
          </div>
        </div>
        <CardBody className="order-details_side-block_body">
          <TrailsData
            className="order-details"
            data={dataTrain}
            parent={"order"}
            icon={icon_yellow_arrow_right}
          />
        </CardBody>
      </div>
    </React.Fragment>
  );
};

export default tripDetails;