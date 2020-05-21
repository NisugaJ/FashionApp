import { Box, Link, makeStyles, ThemeProvider } from "@material-ui/core"
import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import TopAppBar from "./components/appBar"
import { isLogged, getLoggedInUserType } from "./components/auth"
import { MainOuterTheme } from "./styles/themes"
import UserLogin from "./components/login"
import { AuthProvider } from "./config/authContext"
import Notifications from "react-notify-toast"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import LandingPage from "./landing_page/LandingPage"
import AdminDashboard from './main_components/admin/AdminMain';
import NoMatch from './components/NotFound_404';
import StoreManagerDashboard from "./main_components/StoreManager/StoreManager";
import CustomerDashboard from "./main_components/Customer/Customer";
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles(theme => ({
  root: props => ({
    position: "fixed",
    height: "100%",
    width: "100%",
    overflow: "auto",
    backgroundColor: props.bgColor
  }),
  footer: {
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 50,
    height: 100
  },
  appBar: {
    right: 0,
    left: 0
  },
  bodyroot: {
    // margin: 5,
    // padding: 6
  }
}))



let App = () => {
  const currrentUserType = getLoggedInUserType()

  const InnerWrapper = ({ children }) => {
    return (
      <>
        {/*Loading Top AppBar*/}
        <TopAppBar
          siteTitle={siteTitle}
          isLoggedIn={isLogged()}
          className={classes.appBar}
        />
        {children}
        <RenderFooter />
      </>
    )
  }

  const siteTitle = "Luxe Fashions"
  const classes = useStyles({
    bgColor: MainOuterTheme.palette.secondary.light
  })

  return (
    <AuthProvider value={{ login: isLogged() }}>
      <ThemeProvider theme={MainOuterTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Box className={classes.root}>
            <Router>
              <Box className={classes.bodyroot}>
                <Switch>
                  <Route path="/landing">
                    <LandingPage />
                  </Route>
                  <PrivateRoute path="/dashboard">
                    {currrentUserType === 'ADMIN' ? <AdminDashboard />
                      : currrentUserType === 'STORE_MANAGER' ?
                        <InnerWrapper>
                          <StoreManagerDashboard />
                        </InnerWrapper>
                        : currrentUserType === 'CUSTOMER' ?
                          <InnerWrapper>
                            <CustomerDashboard />
                          </InnerWrapper>
                          :
                          <InnerWrapper>
                            <NoMatch />
                          </InnerWrapper>
                    }
                  </PrivateRoute>
                  <Route path="/login">
                    <InnerWrapper>
                      <UserLogin />
                    </InnerWrapper>
                  </Route>
                </Switch>
              </Box>
              <Notifications options={{ zIndex: 500, top: "100px" }} />
            </Router>
          </Box>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

const RenderFooter = () => {
  // const classes = useStyles

  return (
    <div style={{ padding: 5, marginTop: 20, margin: 0 }}>
      <div style={{ textAlign: "center" }}>
        <Link style={{ textDecoration: "none" }} href="http://www.example.net">
          Luxe Fashions
        </Link>
        © {new Date().getFullYear()}
      </div>
    </div>
  )
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged() ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  )
}

export default App
