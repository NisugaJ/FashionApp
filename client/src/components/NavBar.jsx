import React, { Component } from "react";
import NavButton from "./navbutton";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Contact from "./contact";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeArray: [1, 0, 0], name: "" };
    this.clickHandler = this.clickHandler.bind(this);
  }

  //when user click, this function change the state acording to that
  clickHandler(id, name) {
    var arr = [0, 0, 0];
    arr[id] = 1;
    this.setState({ activeArray: arr, name: name });
  }

  render() {
    return (
      <Router>
        <div id="navbar">
          <div className="container nav-container">
            <div id="logo">
              <i className="fas fa-crown fa-2x"></i>
              <label>
                Luxe
                <i>
                  <br />
                  Fashion
                </i>
              </label>
            </div>
            <ul id="navigation">
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <NavButton
                  id={0}
                  active={this.state.activeArray[0]}
                  clickHandler={this.clickHandler}
                  name="Home"
                />
              </Link>
              <Link to={"/About"} style={{ textDecoration: "none" }}>
                <NavButton
                  id={1}
                  active={this.state.activeArray[1]}
                  clickHandler={this.clickHandler}
                  name="About"
                />
              </Link>
              <Link to={"/Contact"} style={{ textDecoration: "none" }}>
                <NavButton
                  id={2}
                  active={this.state.activeArray[2]}
                  clickHandler={this.clickHandler}
                  name="Contact"
                />
              </Link>
            </ul>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/dashboard" component={Contact} />
          <Route path="/buy" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default NavBar;
