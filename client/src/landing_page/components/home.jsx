import React from "react";
import Showcase from "./showcase";
import SpecialItems from "./specialItem";
import WhyUs from "./whyUs";

export const Home = () => {
  return (
    <React.Fragment>
      <Showcase />
      <SpecialItems title={"Popular Items"} />
      <WhyUs />
      <SpecialItems title={"New Items"} />
    </React.Fragment>
  );
};

export default Home
