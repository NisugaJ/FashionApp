import React, { Component } from "react";
import Buttonv2 from "../../components/button";
import baseAxios from "../../config/axios";

class contactTableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    baseAxios.delete(
      "contact/delete/" + this.props.obj._id
    )
      .then(() => {
        console.log("Deleted")
        // this.props.allContacts = this.props.allContacts.filter(function (obj) {
        //   return obj._id !== this.props.obj._id;
        // });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.Email}</td>
        <td>{this.props.obj.Subject}</td>
        <td>{this.props.obj.Message}</td>
        <td className="actions">
          <Buttonv2 href={`mailto:${this.props.obj.Email}`} variant="contained" color="primary">
            Email
            </Buttonv2>
          <Buttonv2 variant="contained" color="" onClick={() => { this.delete(); this.props.onClick() }}>
            Delete
          </Buttonv2>
        </td>
      </tr>
    );
  }
}
export default contactTableRow;
