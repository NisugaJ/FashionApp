import React from "react";
import "./cart.scss";

export const cartItem = ({
  id,
  img,
  title,
  owner,
  price,
  category,
  units,
  delItem,
  plusQty,
  minQty,
}) => {
  return (
    <li key={id} className="cartItem">
      <img src={`${img}`} alt={`${title}`} width="100px" height="100px" />
      <h4>
        {title}
        <br />
        <label>{category}</label>
      </h4>
      <ul className="secDetails">
        <li>From : {owner}</li>
        <li>Price : LKR {price}</li>
        <li>QTY : {units}</li>
        <li>
          <b>Total : LKR {units * price}</b>
        </li>
      </ul>
      <div className="buttons">
        <button
          className="plusBtn"
          onClick={() => {
            plusQty({ id, img, title, owner, price, category, units });
          }}
        >
          +
        </button>
        <button
          className="minusBtn"
          onClick={() => {
            minQty({ id, img, title, owner, price, category, units });
          }}
        >
          -
        </button>
        <button
          className="closeBtn"
          onClick={() => {
            delItem({ id, img, title, owner, price, category, units });
          }}
        >
          &times;
        </button>
      </div>
    </li>
  );
};

export default cartItem;
