import React from "react";

//nav buttons
export const navbutton = (props) => {
  return (
    <div
      style={{
        color: props.active ? "#333" : "#F2BC18",
        backgroundColor: props.active ? "#F2BC18" : "#333",
      }}
      onClick={() => {
        props.clickHandler(props.id, props.name);
      }}
    >
      {props.name}
    </div>
  );
};

export default navbutton;
