import React, { Component } from "react";
import Card from "./card";
import { addToCartAction } from "../../redux/actions/cart.actions";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//this conmponent shows popular items and new items in home component
class SpecialItems extends Component {
  addToCart(product) {
    this.props.addToCartAction(product);
  }
  render() {
    return (
      <div id="specialItems">
        <div className="container">
          <h2 className="py-2">
            <center style={{ fontSize: "2.5rem" }}>{this.props.title}</center>
          </h2>
          <div className="item-container">
            <Card img="/images/3.jpg" addToCart={this.addToCart.bind(this)} />
            <Card img="/images/3.jpg" addToCart={this.addToCart.bind(this)} />
            <Card img="/images/3.jpg" addToCart={this.addToCart.bind(this)} />
            <Card img="/images/3.jpg" addToCart={this.addToCart.bind(this)} />
            <Card img="/images/3.jpg" addToCart={this.addToCart.bind(this)} />
            <Card img="/images/3.jpg" addToCart={this.addToCart.bind(this)} />
            <Card img="/images/3.jpg" addToCart={this.addToCart.bind(this)} />
            <Card img="/images/3.jpg" addToCart={this.addToCart.bind(this)} />
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapActionsToProps)(SpecialItems);
