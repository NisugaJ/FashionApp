import React, { Component } from "react";
import "./admin.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBtn from "./navBtn";
import dashboard from "./dashboard";
import Contacts from "./contacts";
import managerEdit from './manager/editManager';
import categoryEdit from './category/editCategory';
import { Link as MLink, Typography } from "@material-ui/core";
import LogoImage from "../../components/logo_image";
import { Button, MenuItem } from "@material-ui/core";
import ManagersTabPanel from "./manager/managersTab";
import CategoriesTabPanel from "./category/categoriesTabPanel";
import UserManager from "./users/ManageUsers";
import { logOut, getUserFirstName } from "../../components/auth";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeArray: [0, 0, 0, 0, 0, 0, 0], name: "" };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(id, name) {
    var arr = [0, 0, 0, 0, 0, 0, 0];
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
              </Button><br />

            </section>
            <Typography variant="h5" component="label" style={{ marginLeft: "4rem", marginBottom: "1rem", color: "#f2bc18" }}>
              {getUserFirstName()} (Admin)
            </Typography>
            <div className="navBtn">
              <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
                <NavBtn
                  id={0}
                  active={this.state.activeArray[0]}
                  clickHandler={this.clickHandler}
                  name="Dashboard"
                />
              </Link>
              <Link to={"/dashboard/customers"} style={{ textDecoration: "none" }}>
                <NavBtn
                  id={1}
                  active={this.state.activeArray[1]}
                  clickHandler={this.clickHandler}
                  name="Customers"
                />
              </Link>
              <Link to={"/dashboard/managers"} style={{ textDecoration: "none" }}>
                <NavBtn
                  id={2}
                  active={this.state.activeArray[2]}
                  clickHandler={this.clickHandler}
                  name="Managers"
                />
              </Link>

              <Link to={"/dashboard/categories"} style={{ textDecoration: "none" }}>
                <NavBtn
                  id={3}
                  active={this.state.activeArray[3]}
                  clickHandler={this.clickHandler}
                  name="Categories"
                />
              </Link>
              <Link to={"/dashboard/contact"} style={{ textDecoration: "none" }}>
                <NavBtn
                  id={5}
                  active={this.state.activeArray[5]}
                  clickHandler={this.clickHandler}
                  name="Contacts"
                />
              </Link>
              <MLink
                href="/dashboard"
                className="py-1 my-3"
                style={{ marginLeft: "0.75rem", textDecoration: "none", color: "#F2BC18", backgroundColor: "#333" }}
                onClick={() => {
                  logOut()
                }}
              >
                <MenuItem><b>Logout</b> <PowerSettingsNewIcon /></MenuItem>
              </MLink>
            </div>
          </div>
          <div id="sideContent">
            <Switch>
              <Route exact path="/dashboard" component={dashboard} />
              <Route path="/dashboard/customers" component={UserManager} />
              <Route path="/dashboard/managers" component={ManagersTabPanel} />
              <Route path='/dashboard/edit/:id' component={managerEdit} />
              <Route path="/dashboard/categories" component={CategoriesTabPanel} />
              <Route path='/dashboard/editCategory/:id' component={categoryEdit} />
              <Route path="/dashboard/contact" component={Contacts} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default SideBar;
