import React, { Component } from "react";
import Card from "../components/card";
import "./products.scss";
//import PRODUCTS from "./DATA";
import axios from "axios";
import backend_config from "../../config/backend_config";
import { addToCartAction } from "../../redux/actions/cart.actions";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Products extends Component {

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
    console.log(this.state.PRODUCTS);
    console.log(this.props.cart);
    return (
      <React.Fragment>
        <div className="products">
          {this.state.PRODUCTS.map((p) => (
            <Card key={p._id} {...p} addToCart={this.addToCart.bind(this)} />
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
