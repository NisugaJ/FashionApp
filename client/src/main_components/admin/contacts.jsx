import React, { Component } from "react";
import Axios from "axios";
import TableRow from "./contactTableRow";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
  }
  componentDidMount() {
    Axios.get("http://localhost:3000/contact/all")
      .then((response) => {
        this.setState({ contacts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.contacts.map((object, i) => {
      return <TableRow obj={object} key={i} />;
    });
  }
  render() {
    return (
      <React.Fragment>
        <caption>Contact List</caption>
        <table className="contactTable">
          <thead>
            <tr>
              <th>E-Mail</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Contacts;
