import React, { Component } from "react";
import Card from "../components/card";
import "./products.scss";
import PRODUCTS from "./DATA";
import { addToCartAction } from "../../redux/actions/cart.actions";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Products extends Component {
  addToCart(product) {
    this.props.addToCartAction(product);
  }

  render() {
    console.log(this.props.cart);
    return (
      <React.Fragment>
        <div className="products">
          {PRODUCTS.map((p) => (
            <Card key={p.id} {...p} addToCart={this.addToCart.bind(this)} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

const mapActionsToProps = (dispatch) => {
  return bindActionCreators(
    {
      addToCartAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionsToProps)(Products);
