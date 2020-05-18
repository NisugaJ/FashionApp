import React from "react";

//the why us component in home page
export const whyUs = () => {
  return (
    <div id="whyUs">
      <div className="container">
        <h1>
          <center>Why Us</center>
        </h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vero
          accusantium quae maiores eveniet. Dolores facilis corrupti minima
          inventore aut ut dolor nam itaque consequatur libero nisi beatae,
          ipsum in alias architecto non! Voluptatum rem nam alias similique
          voluptates temporibus veniam minus sapiente iusto autem ad at, aliquam
          quisquam! Eligendi, culpa voluptas. Enim error sit ipsam aut ab qui
          unde velit soluta quam vel voluptatem autem, atque vitae incidunt
          dolores pariatur eos doloremque distinctio porro molestias est ad
          itaque veniam. Officiis saepe tenetur quam perspiciatis totam
          doloremque, cupiditate nesciunt, optio soluta necessitatibus mollitia
          delectus nostrum in unde rem. Consequatur, id.
        </p>
      </div>
      <div
        id="whyImg"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0)), url('/images/whyUs.jpg') no-repeat center center/cover`
        }}
      ></div>
    </div>
  );
};

export default whyUs;
