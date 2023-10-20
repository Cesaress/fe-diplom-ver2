import React from "react";
import {useLocation, useParams} from "react-router-dom";

import AssistantBlock from "./assistantBlock";
import OrderDetails from "./orderDetails";
import LastTickets from "./lastTickets";
import {useGetLastTicketsQuery} from "../../features/myApi";
import "./sidebar.css";

const sideBar = () => {
  const location = useLocation();
  const params = useParams();

  const {data = []} = useGetLastTicketsQuery();

  if (
    location.pathname === "/fe-diplom-ver2" ||
    location.pathname === "/fe-diplom-ver2/order-result"
  ) {
    return;
  }

  const getLocation = () => {
    if (
      location.pathname === "/fe-diplom-ver2/trains" ||
      location.pathname === "/fe-diplom-ver2/trains/" 
    ) {
      return true;
    } else if (location.pathname === `/fe-diplom-ver2/seats/${params.id}`) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <React.Fragment>
      <aside className="sidebar-wrap container p-0">
        <div className="sidebar" id="sidebar">
          {getLocation() ? <AssistantBlock /> : <OrderDetails />}
          {getLocation() && data && data.length > 0 ? (
            <LastTickets data={data.slice(0, 3)} />
          ) : null}
        </div>
      </aside>
    </React.Fragment>
  );
};

export default sideBar;
