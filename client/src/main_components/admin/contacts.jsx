import React, { Component } from "react";
import TableRow from "./contactTableRow";
import { Typography } from "@material-ui/core";
import PureProgressSpinner from "../../components/PureProgressSpinner";
import baseAxios from "../../config/axios";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
    this.loadContacts = this.loadContacts.bind(this);
  }

  loadContacts() {
    baseAxios.get("contact/all")
      .then((response) => {
        this.setState({ contacts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadContacts()
  }
  tabRow() {
    return this.state.contacts.map((object, i) => {
      return <TableRow obj={object} key={i} onClick={() => this.loadContacts()} />
    });
  }
  render() {
    if (this.state.contacts.length === 0) {
      return <PureProgressSpinner message="Loading Contacts..." />
    }

    return (
      <React.Fragment>
        <Typography variant="h4" style={{ marginLeft: "10px" }}>Contact List</Typography>
        <table className="table-grid">
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
