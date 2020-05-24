import React, { Component } from "react";
import Card from "./card";
import axios from "axios";
import backend_config from "../../config/backend_config";
import { addToCartAction } from "../../redux/actions/cart.actions";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//this conmponent shows popular items and new items in home component
class specialItems extends Component {

  constructor(props) {
    super(props);

    this.state = { PRODUCTS: [] }
  }

  addToCart(product) {
    this.props.addToCartAction(product);
  }

  componentDidMount() {
    axios.get(backend_config.baseURL + 'product/')
      .then(response => {
        this.setState({
          PRODUCTS: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {

    return (
      <div id="specialItems">
        <div className="container">
          <h2 className="py-2">
            <center style={{ fontSize: "2.5rem" }}>{this.props.title}</center>
          </h2>
          <div className="item-container">
            {this.state.PRODUCTS.map((p) => (
              <Card key={p._id} {...p} addToCart={this.addToCart.bind(this)} />
            ))}
          </div>
        </div>
      </div>
    );

  }


};

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

export default connect(mapStateToProps, mapActionsToProps)(specialItems);
