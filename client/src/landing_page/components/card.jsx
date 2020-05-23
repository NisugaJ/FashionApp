import React from "react";

//cards in special items
export const card_article = ({
  id,
  img,
  title,
  owner,
  price,
  category,
  addToCart,
}) => {
  return (
    <article className="card">
      <img
        src={`${img}`}
        style={{ width: "100%" }}
        alt="It's about how the product is look like"
      />
      <div className="card-details">
        <h4>
          {title}
          <br />
          <label>{category}</label>
        </h4>
        <p>From: {owner}</p>
        <p>LKR: {price}</p>
        <button className="btn-card btn-buy">
          <i className="fas fa-shopping-bag"></i> Buy now
        </button>
        <button
          className="btn-card btn-cart"
          onClick={() => {
            addToCart({ id, img, title, category, owner, price, units: 1 });
          }}
        >
          <i className="fas fa-shopping-cart"></i> Add to cart
        </button>
      </div>
    </article>
  );
};

export default card_article;
