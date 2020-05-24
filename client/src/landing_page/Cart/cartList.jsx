import React, { Component } from "react";
import CartItem from "./cartItem";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from "react-redux";
import {
  delFromCartAction,
  plusQtyCartAction,
  minQtyCartAction,
} from "../../redux/actions/cart.actions";
import { bindActionCreators } from "redux";

import "./cart.scss";
import { Button } from "@material-ui/core";
import OrderNowStepIndex from "../OrderNow/OrderNowStepsIndex";
import { isLogged, getLoggedInUserType } from "../../components/auth";
const sweetAlert = require("sweetalert2")

class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = { dialogOpen: false };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  delItem = (cartItem) => {
    this.props.delFromCartAction(cartItem);
  };
  plusQty = (cartItem) => {
    this.props.plusQtyCartAction(cartItem);
  };
  minQty = (cartItem) => {
    this.props.minQtyCartAction(cartItem);
  };

  handleClickOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };


  render() {
    return (
      <div>

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
          <Button variant="contained" style={{ fontSize: 18 }} color="primary" onClick={() => {
            if (isLogged() && getLoggedInUserType() === 'CUSTOMER')
              this.handleClickOpen()
            else {
              sweetAlert.fire({
                position: 'center',
                icon: 'error',
                title: 'You must be a logged in Customer to order products',
                showConfirmButton: false,
              })
            }
          }}>
            Order Now
              </Button>
          <Dialog maxWidth={"lg"} open={this.state.dialogOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Order Now</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Complete these three steps to complete your order.
          </DialogContentText>
              <OrderNowStepIndex orderItems={this.props.cart} />
            </DialogContent>
          </Dialog>
        </ul>

      </div >
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
