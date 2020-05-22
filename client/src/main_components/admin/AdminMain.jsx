import React, { Component } from "react";
import "./admin.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBtn from "./navBtn";
import Content1 from "./content1";
import managerAdd from "../admin/addmanager";
import Contacts from "./contacts";
import managerView from "../admin/viewManager";
import managerEdit from '../admin/editManager';

import LogoImage from "../../components/logo_image";
import { Button } from "@material-ui/core";


class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeArray: [0, 0, 0,0], name: "" };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(id, name) {
    var arr = [0, 0, 0,0];
    arr[id] = 1;
    this.setState({ activeArray: arr, name: name });
  }
  render() {
    return (
      <Router>
        <div id="admin">
          <div id="sideMenu">
            <section className="logo">
              <Button
                color="inherit"
                aria-label="logo"
              >
                <a href="/">
                  <LogoImage size={3} />
                </a>
              </Button>
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
              <Link to={"/dashboard/addManager"} style={{ textDecoration: "none" }}>
                <NavBtn
                  id={1}
                  active={this.state.activeArray[1]}
                  clickHandler={this.clickHandler}
                  name="Manager"
                />
              </Link>
              <Link to={"/dashboard/viewManager"} style={{ textDecoration: "none" }}>
                <NavBtn
                  id={2}
                  active={this.state.activeArray[2]}
                  clickHandler={this.clickHandler}
                  name="View Manager"
                />
              </Link>
              <Link to={"/dashboard/contact"} style={{ textDecoration: "none" }}>
                <NavBtn
                  id={3}
                  active={this.state.activeArray[3]}
                  clickHandler={this.clickHandler}
                  name="Contacts"
                />
              </Link>
              
            </div>
          </div>
          <div id="sideContent">
            <Switch>
              <Route exact path="/dashboard" component={Content1} />
              <Route path="/dashboard/addManager" component={managerAdd} />
              <Route path="/dashboard/viewManager" component={managerView} />
              <Route path='/dashboard/edit/:id' component={managerEdit} />
              <Route path="/dashboard/contact" component={Contacts} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default SideBar;
