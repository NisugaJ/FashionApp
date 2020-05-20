import React, { Component } from "react";
import Axios from "axios";

class contactTableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    Axios.delete(
      "http://localhost:3000/api/contact/delete/" + this.props.obj._id
    )
      .then(console.log("Deleted"))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.Email}</td>
        <td>{this.props.obj.Subject}</td>
        <td>{this.props.obj.Message}</td>
        <td className="actions">
          <button className="replyBtn">
            <a href={`mailto:${this.props.obj.Email}`}>Email</a>
          </button>
          <button className="delBtn" onClick={this.delete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default contactTableRow;
