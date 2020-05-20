import React from "react";
import NavButton from "./navbutton";
import { useState } from "react"

import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Contact from "./contact";
import { isLogged } from "../../components/auth";
import Image from "../../components/logo_image";
import { Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import NoMatch from "../../components/NotFound_404";

function LandingPageSubPage() {
  let { subRouteID } = useParams()

  let landingPageSubPage = <NoMatch />

  switch (subRouteID) {
    case "about":
      landingPageSubPage = <About />
      break
    case "contact":
      landingPageSubPage = <Contact />
      break

    default:
      break
  }
  return landingPageSubPage
}


const NavBar = () => {
  const [activeArray, setActiveArray] = useState([1, 0, 0, 0])

  let { path, url } = useRouteMatch()

  // useEffect(() => {
  //   setActiveArray([1, 0, 0, 0])
  // }, [])


  //when user click, this function change the state acording to that
  const clickHandler = (id, name) => {
    var arr = [0, 0, 0, 0];
    arr[id] = 1;
    setActiveArray(arr)
  }


  return (
    <Router>
      <div id="navbar">
        <div className="container nav-container">
          <div id="logo" style={{
            display: "flex",
            alignItems: "center",
          }}>
            <Link to={`${url}`} style={{ textDecoration: "none", height: "auto" }}>
              <Image size={3} />
            </Link>
            <Typography variant="h5"  >
              Luxe Fashions
            </Typography>
          </div>
          <ul id="navigation">
            <Link to={`${url}/about`} style={{ textDecoration: "none" }}>
              <NavButton
                id={1}
                active={activeArray[1]}
                clickHandler={clickHandler}
                name="About"
              />
            </Link>
            <Link to={`${url}/contact`} style={{ textDecoration: "none" }}>
              <NavButton
                id={2}
                active={activeArray[2]}
                clickHandler={clickHandler}
                name="Contact"
              />
            </Link>
            <Link to={null} style={{ textDecoration: "none" }}>
              <NavButton
                id={3}
                active={activeArray[3]}
                clickHandler={() => window.location.replace('/dashboard')}
                name={isLogged() ? "My Dashboard" : "Login"}
              />
            </Link>
            <li style={{ "boxShadow": "none" }}>
              {/* <IconButton aria-label="cart"> */}
              <Badge badgeContent={1} color="secondary" variant="standard" >
                <ShoppingCart fontSize="large" />
              </Badge>
              {/* </IconButton> */}
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path={path}  >
          <Home />
        </Route>
        <Route path={`${path}/:subRouteID`}>
          <LandingPageSubPage />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default NavBar;
