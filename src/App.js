import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "src/components/Layout";
import HomePage from "src/components/Pages/HomePage";
import SelectionTrain from "src/components/Pages/SelectionTrain";
import SelectionWagons from "src/components/Pages/SelectionWagons";
import PassengersInfo from "src/components/Pages/PassengersInfo";
import PersonalData from "src/components/Pages/PersonalData";
import Screening from "src/components/Pages/Screening";
import OrderResult from "src/components/Pages/OrderResult";
import NotFound from "src/components/Pages/NotFound";
import "App.css";

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

export default App;