import React from "react";

//cards in special items
export const card_article = props => {
  return (
    <article className="card">
      <img
        src="/images/3.jpg"
        style={{ width: "100%" }}
        alt="It's about how the product is look like"
      />
      <div className="card-details">
        <h4>Title</h4>
        <p>From: {props.owner}</p>
        <p>LKR: {props.price}</p>
        <button className="btn-buy">
          <i className="fas fa-shopping-bag"></i> Buy now
        </button>
      </div>
    </article>
  );
};

export default card_article;
