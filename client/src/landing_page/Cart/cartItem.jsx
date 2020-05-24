import React from "react";
import "./cart.scss";

export const cartItem = ({
  _id,
  image_path,
  name,
  owner,
  price,
  category_id,
  qty,
  delItem,
  plusQty,
  minQty,
}) => {
  return (
    <li key={_id} className="cartItem">
      <img src={`${image_path}`} alt={`${name}`} width="100px" height="100px" />
      <h4>
        {name}
        <br />
        <label>{category_id}</label>
      </h4>
      <ul className="secDetails">
        <li>From : {owner}</li>
        <li>Price : LKR {price}</li>
        <li>QTY : {qty}</li>
        <li>
          <b>Total : LKR {price * qty}</b>
        </li>
      </ul>
      <div className="buttons">
        <button
          className="plusBtn"
          onClick={() => {
            plusQty({ _id, image_path, name, owner, price, category_id, qty });
          }}
        >
          +
        </button>
        <button
          className="minusBtn"
          onClick={() => {
            minQty({ _id, image_path, name, owner, price, category_id, qty });
          }}
        >
          -
        </button>
        <button
          className="closeBtn"
          onClick={() => {
            delItem({ _id, image_path, name, owner, price, category_id, qty });
          }}
        >
          &times;
        </button>
      </div>
    </li>
  );
};

export default cartItem;
