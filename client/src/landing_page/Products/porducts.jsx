import React, { Component } from "react";
import Card from "../components/card";
import "./products.scss";
import { addToCartAction } from "../../redux/actions/cart.actions";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import baseAxios from "../../config/axios";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  addToCart(product) {
    this.props.addToCartAction(product);
  }

  loadContacts() {
    baseAxios.get('product')
      .then(response => {
        if (response.status === 200) {
          let prodArray = []
          response.data.forEach(pItem => {
            let item = {
              id: pItem._id,
              img: pItem.image_path,
              title: pItem.name,
              owner: "",
              price: pItem.price,
              category: pItem.category_id,
            }
            prodArray.push(item);
          })
          this.setState({ products: prodArray });
        }
        else {
          console.log("Products fetch err")
        }

      })
      .catch(function (error) {
        console.log(error);

      })

  }

  componentDidMount() {
    this.loadContacts()
  }

  render() {
    return (
      <React.Fragment >
        <header
          id="contact"
          style={{
            background: "rgba(184, 143, 0, 1) ",
            height: "100%"
          }}
        >
          <div className="products">
            {this.state.products.map((p) => (
              <Card key={p._id} {...p} addToCart={this.addToCart.bind(this)} />
            ))}
          </div>
        </header>
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
