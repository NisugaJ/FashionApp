import React, { Component } from "react";
import Axios from "axios";
import TableRow from "./contactTableRow";
import backend_config from "../../config/backend_config";
import { Typography } from "@material-ui/core";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
  }
  componentDidMount() {
    Axios.get(backend_config.baseURL + "contact/all")
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
        <Typography variant="h5">Contact List</Typography>
        <table className="table-contacts">
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
      </React.Fragment >
    );
  }
}

export default Contacts;
