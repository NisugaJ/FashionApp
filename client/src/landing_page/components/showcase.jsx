import React from "react";

//the main content in the home page
export const showcase = () => {
  return (
    <header
      id="showcase"
      style={{
        background: `radial-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/showcase.jpg') no-repeat center center/cover`,
        height: "100vh",
      }}
    >
      <div id="showcase-content">
        <div className="container">
          <h1 style={{ color: "#fff" }}>
            Be <br />
            <i style={{ fontSize: "4rem" }}>Outstanding</i>
          </h1>
          <br />
          <label className="btn-primary">
            <i className="fas fa-shopping-bag"></i> Let's Shop
          </label>
        </div>
      </div>
    </header>
  );
};
export default showcase;
