import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import FormSideBar from "../forms/formSideBar";
import SwitchBlock from "./switchBlock";
import PriceBlock from "./priceBlock";
import SideBlock from "./sideBlock";
import {parsedUrlString, getUrlSearch} from "../../utils/trainSelectionUtils";
import setTrainsParameters from "../../features/catalogTrainsSlice";

const assistantBlock = () => {
  const {from, to} = useSelector(
    (state) => state.catalogTrains.searchData.travelData
  );

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  let upData = parsedUrlString(location.search);

  const handleChangeSwitch = (event) => {
    const inputName = event.target.name;
    const checked = event.target.checked;
    if (
      from.date &&
      from.city.name &&
      to.city.name &&
      location.pathname === "/fe-diplom-ver2/trains"
    )
      dispatch(
        setTrainsParameters({data: {name: inputName, status: checked}})
      );

    let newValue = Object.keys(upData.parameters).find((key) =>
      key.includes(inputName)
    );

    upData.parameters[newValue] = checked;
    const urlSearchString = getUrlSearch(
      upData.optionsName,
      upData.formData,
      upData.filter,
      upData.parameters
    );
    
    navigate({
      search: `${urlSearchString}`,
    });
  };

  return (
    <React.Fragment>
      <div className="assistant-block_wrap">
        <FormSideBar from={from.date} to={to.date} />
        <SwitchBlock handleChange={handleChangeSwitch} />
        <PriceBlock />
        <SideBlock type="departure" date={from.date} side="start" />
        <SideBlock type="arrival" date={to.date} side="end" />
      </div>
    </React.Fragment>
  );
};

export default assistantBlock;