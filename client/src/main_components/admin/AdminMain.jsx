import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBtn from "./navBtn";
import Content1 from "./content1";
import Content2 from "./content2";
import Contacts from "./contacts";
import "./admin.scss";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { activeArray: [0, 0, 0], name: "" };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(id, name) {
    var arr = [0, 0, 0];
    arr[id] = 1;
    this.setState({ activeArray: arr, name: name });
  }
  render() {
    return (
      <Router>
        <div id="admin">
          <div id="sideMenu">
            <section className="logo">
              <i className="fas fa-crown fa-3x"></i>
            </section>
            <h3 className="user">Admin</h3>
            <div className="navBtn">
              <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
                <NavBtn
                  id={0}
                  active={this.state.activeArray[0]}
                  clickHandler={this.clickHandler}
                  name="Dashboard"
                />
              </Link>
              <Link to={"/dashboard/member"} style={{ textDecoration: "none" }}>
                <NavBtn
                  id={1}
                  active={this.state.activeArray[1]}
                  clickHandler={this.clickHandler}
                  name="Members"
                />
              </Link>
              <Link to={"/dashboard/contact"} style={{ textDecoration: "none" }}>
                <NavBtn
                  id={2}
                  active={this.state.activeArray[2]}
                  clickHandler={this.clickHandler}
                  name="Contacts"
                />
              </Link>
            </div>
          </div>
          <div id="sideContent">
            <Switch>
              <Route exact path="/dashboard" component={Content1} />
              <Route path="/dashboard/member" component={Content2} />
              <Route path="/dashboard/contact" component={Contacts} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default AdminDashboard;
