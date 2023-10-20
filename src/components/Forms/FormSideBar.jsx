import React from "react";
import useSelector from "react-redux";
import CardTitle from "../atoms/atoms";
import FormCalendar from "../molecules/reactCalendar";

const formSideBar = () => {
  const { from, to } = useSelector((state) => state.formTickets.formData);

  return (
    <React.Fragment>
      <div className="form-sidebar-block">
        <div className="form-sidebar-block_departure">
          <CardTitle
            className={"form-sidebar-block_departure"}
            text="Дата поездки"
          />
          <FormCalendar
            className="sidebar_form"
            value={from.date ? new Date(from.date) : null}
          />
        </div>

        <div className="form-sidebar-block_arrival">
          <CardTitle
            className={"form-sidebar-block_arrival"}
            text="Дата возвращения"
          />
          <FormCalendar
            className="sidebar_form"
            value={to.date ? new Date(to.date) : null}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default formSideBar;