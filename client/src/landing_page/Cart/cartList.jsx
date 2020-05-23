import React, { Component } from "react";
import CartItem from "./cartItem";

import { connect } from "react-redux";
import {
  delFromCartAction,
  plusQtyCartAction,
  minQtyCartAction,
} from "../../redux/actions/cart.actions";
import { bindActionCreators } from "redux";

import "./cart.scss";

class CartList extends Component {
  delItem = (cartItem) => {
    this.props.delFromCartAction(cartItem);
  };
  plusQty = (cartItem) => {
    this.props.plusQtyCartAction(cartItem);
  };
  minQty = (cartItem) => {
    this.props.minQtyCartAction(cartItem);
  };

  render() {
    console.log(this.props.cart);
    return (
      <ul
        className="cartList"
        style={{
          background: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/man-doing-pose-1496647.jpg') no-repeat center center/cover`,
        }}
      >
        {this.props.cart.map((c) => (
          <CartItem
            {...c}
            key={c.id}
            delItem={this.delItem.bind(this)}
            minQty={this.minQty.bind(this)}
            plusQty={this.plusQty.bind(this)}
          />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
const mapActionsToProps = (dispatch) => {
  return bindActionCreators(
    {
      delFromCartAction,
      plusQtyCartAction,
      minQtyCartAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionsToProps)(CartList);
