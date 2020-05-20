import React, { Component } from "react";
import Axios from "axios";
import TableRow from "./contactTableRow";
import { Typography } from "@material-ui/core";
import PureProgressSpinner from "../../components/PureProgressSpinner";

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
      return <TableRow obj={object} key={i} allContacts={this.state.contacts} />;
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
