import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./components/layout";
import HomePage from "./components/pages/homePage";
import SelectionTrain from "./components/pages/selectionTrain";
import SelectionWagons from "./components/pages/selectionWagons";
import PassengersInfo from "./components/pages/passengersInfo";
import PersonalData from "./components/pages/personalData";
import Screening from "./components/pages/screening";
import OrderResult from "./components/pages/orderResult";
import NotFound from "./components/pages/notFound";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fe-diplom-ver2/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="trains/" element={<SelectionTrain />} />
          <Route path="seats/:id" element={<SelectionWagons />} />
          <Route path="passengers/:id/" element={<PassengersInfo />} />
          <Route path="personal_information/:id/" element={<PersonalData />} />
          <Route path="screening/:id/" element={<Screening />} />
          <Route path="order-result/:id/" element={<OrderResult/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}