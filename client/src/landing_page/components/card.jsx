import React from "react";

//cards in special items
export const card_article = ({
  _id,
  image_path,
  name,
  owner,
  price,
  category_id,
  addToCart,
}) => {
  return (
    <article className="card">
      <img
        src={`${image_path}`}
        style={{ width: "100%" }}
        alt="It's about how the product is look like"
      />
      <div className="card-details">
        <h4>
          {name}
          <br />
          <label>{category_id}</label>
        </h4>
        <p>From: {owner}</p>
        <p>LKR: {price}</p>
        <button className="btn-card btn-buy">
          <i className="fas fa-shopping-bag"></i> Buy now
        </button>
        <button
          className="btn-card btn-cart"
          onClick={() => {
            addToCart({ _id, image_path, name, category_id, owner, price, qty: 1 });
          }}
        >
          <i className="fas fa-shopping-cart"></i> Add to cart
        </button>
      </div>
    </article>
  );
};

export default card_article;
