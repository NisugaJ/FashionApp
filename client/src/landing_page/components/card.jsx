import React from "react";
import baseAxios from "../../config/axios";
import { getUserId } from "../../components/auth";
const Swal = require('sweetalert2');

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

  const addToWishList = () => {
    baseAxios.post('user/addToWishList', { productId: _id, userId: getUserId() })
      .then((response) => {
        if (response.status === 200) {
          console.log("Submitted")
          Swal.fire({
            position: 'center',
            icon: 'success',
            name: 'Added ' + name + ' to Wishlist',
          })
        }

      }).catch((error) => {
        console.log(error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Failed to add' + name + ' to Wishlist',
        })
      })
  }

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
        <button
          className="btn-card btn-wishlist"
          onClick={() => {
            addToWishList();
          }}
        >
          <i class="fas fa-list"></i> Add to wishlist
        </button>
      </div>
    </article>
  );
};

export default card_article;
