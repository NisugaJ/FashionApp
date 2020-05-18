import React from "react";
import Map from "./map";
import SocialIcons from "./socialIcons";

export const footer = () => {
  return (
    <footer id="footer">
      <div className="container footer-container">
        <div>
          <center>{logo()}</center>
        </div>
        <div>
          <Map width="100%" height="200px" />
        </div>
        <div>{social()}</div>
      </div>
      <div className="container" id="copyRight">
        <center>{copyRight()}</center>
      </div>
    </footer>
  );
};

export default footer;

function logo() {
  return (
    <div>
      <i className="fas fa-crown fa-5x" style={{ color: "#F2BC18" }}></i>
      <p style={{ paddingTop: "2rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Libero ea
        imilique ullam iste consequuntur ut voluptatum aspernatur, quod odit ab!
      </p>
    </div>
  );
}

function social() {
  return (
    <div>
      <h3>Join our club</h3>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
        repudiandae?
      </p>
      <SocialIcons />
    </div>
  );
}

function copyRight() {
  return (
    <p>
      <i className="fas fa-crown fa-1x" style={{ paddingRight: ".5rem" }}></i>
      LUXE <i>Fashion</i> Copyright &copy; 2020, All Rights Reserved
    </p>
  );
}
