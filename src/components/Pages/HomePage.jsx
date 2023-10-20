import React from "react";
import MainForm from "../Forms/MainForm";
import About from "../Main/about";
import HowItWorks from "../Main/howItWorks";
import FeedBack from "../Main/FeedBack";
import Banner from "../Molecules/banner";
import banner1 from "../../img/banner/banner1.png";

const homePage = () => {
  return (
    <React.Fragment>
      <Banner className="banner banner-home" banner={banner1} />
      <MainForm className="homepage_form" />
      <About />
      <HowItWorks />
      <FeedBack />
    </React.Fragment>
  );
};

export default homePage;