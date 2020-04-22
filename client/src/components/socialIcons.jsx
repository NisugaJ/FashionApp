import React from "react";

//social icons in footer
export const socialIcons = () => {
  return (
    <ul
      style={{
        listStyle: "none",
        color: "#F2BC18",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1.5rem"
      }}
    >
      <li>
        <i className="fab fa-instagram fa-2x"></i>
      </li>
      <li>
        <i className="fab fa-twitter fa-2x"></i>
      </li>
      <li>
        <i className="fab fa-facebook fa-2x"></i>
      </li>
      <li>
        <i className="fab fa-instagram fa-2x"></i>
      </li>
    </ul>
  );
};

export default socialIcons;
