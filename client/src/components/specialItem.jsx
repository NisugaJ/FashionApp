import React from "react";
import Card from "./card";

//this conmponent shows popular items and new items in home component
export const specialItems = props => {
  return (
    <div id="specialItems">
      <div className="container">
        <h2 className="py-2">
          <center style={{ fontSize: "2.5rem" }}>{props.title}</center>
        </h2>
        <div className="item-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default specialItems;
