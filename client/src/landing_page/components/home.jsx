import React from "react";
import Showcase from "./showcase";
import SpecialItems from "./specialItem";
import WhyUs from "./whyUs";

export const Home = () => {
  return (
    <React.Fragment>
      <Showcase />
      <div id="popular_items">
        <SpecialItems title={"Popular Items"} />
      </div>
      <WhyUs />
      <div id="new_items">
        <SpecialItems title={"New Items"} id="new_items" />
      </div>
    </React.Fragment>
  );
};

export default Home
