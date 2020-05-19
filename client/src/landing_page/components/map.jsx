import React from "react";

//map component
export const map = props => {
  return (
    <iframe
      title="Our main Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13613.866631223847!2d79.97097503099046!3d6.926585911329496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMzMuNiJOIDc5wrA1OCc0NS4zIkU!5e0!3m2!1sen!2slk!4v1583856130516!5m2!1sen!2slk"
      width={props.width}
      height={props.height}
      style={{
        border: 0,
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      }}
    ></iframe>
  );
};
export default map;
