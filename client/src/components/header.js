import Link from "@material-ui/core/Link"
import PropTypes from "prop-types"
import React from "react"
import Image from "./logo_image"
import styled, { ThemeProvider } from "styled-components"
import Button from "../components/button"
import { isLogged } from "./auth"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Admin from "../main_components/admin/Dashboard"
import AppIndex from "../appIndex"
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ButtonGroup
} from "@material-ui/core"
import { MainOuterTheme } from "../styles/themes"

const H2 = styled.h2`
  margin: 15px 0px 5px 0px;
`
const StyledHeader = styled.header`
  background-color: lightyellow;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.25);
`
const StyledDiv = styled.div`
  flex: 1;
  text-align: center;
`

const ResponsiveHidingDiv = styled(StyledDiv)`
  @media (max-width: 480px) {
    display: none;
  }
`
const HeaderButton = styled(Button)`
  margin: 20px 5px 20px 5px;
`
const logOut = () => {
  console.log("Clearingggg")
  sessionStorage.clear()
  // sessionStorage.setItem("user", "")
  // sessionStorage.setItem("access_token", "")
  return isLogged()
}

const Header = ({ siteTitle, loginStatus }) => {
  return (
    <Router>
      <StyledHeader>
        <StyledDiv style={{ textAlign: "left" }}>
          <a href="/">
            <Image />
          </a>
        </StyledDiv>
        <StyledDiv>
          <H2>
            <Link style={{ textDecoration: "none" }} href="/">
              {siteTitle}
            </Link>
          </H2>
        </StyledDiv>

        <ResponsiveHidingDiv style={{ textAlign: "right" }}>
          {loginStatus ? (
            <div>
              <HeaderButton
                onClick={() => {
                  logOut()
                  console.log("Logged out")
                }}
              >
                Logout{" "}
              </HeaderButton>
              <Link href="/dashboard">
                <HeaderButton>Admin Panel</HeaderButton>
              </Link>
            </div>
          ) : (
              <Link href="/dashboard">
                <HeaderButton>Admin Login</HeaderButton>
              </Link>
            )}
        </ResponsiveHidingDiv>
      </StyledHeader>
      <Switch>
        <Route exact path="/">
          <AppIndex />
        </Route>
        <Route path="/dashboard">
          <Admin />
        </Route>
      </Switch>
    </Router>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  logoButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "red"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
}))

const MuiHeader = ({ siteTitle, loginStatus }) => {
  const classes = useStyles()

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static" color="secondary" className={classes.appBar}>
          <Toolbar>
            <Button
              className={classes.logoButton}
              color="inherit"
              aria-label="logo"
            >
              <a href="/">
                <Image />
              </a>
            </Button>
            <Typography variant="h4" className={classes.title}>
              <a href="/" style={{ textDecoration: "none" }}>
                {siteTitle}
              </a>
            </Typography>
            {loginStatus ? (
              <ButtonGroup
                color="secondary"
                aria-label="outlined secondary button group"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Button href="/dashboard" color="inherit">
                  Admin Panel
                </Button>
                <Button href="/dashboard" color="inherit">
                  Logout
                </Button>
              </ButtonGroup>
            ) : (
                <Button href="/dashboard" color="inherit">
                  Login
                </Button>
              )}
          </Toolbar>
        </AppBar>
      </div>
      <Switch>
        <Route exact path="/">
          <AppIndex />
        </Route>
        <Route path="/dashboard">
          <Admin />
        </Route>
      </Switch>
    </Router>
  )
}
export default MuiHeader
