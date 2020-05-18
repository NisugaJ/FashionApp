import { Box } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import { makeStyles } from "@material-ui/core/styles"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import MenuIcon from "@material-ui/icons/Menu"
import clsx from "clsx"
import React from "react"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useParams,
  useRouteMatch
} from "react-router-dom"
import { isLogged } from "../../components/auth"
import AdminLogin from "../../components/login"
import NoMatch from "../../components/NotFound_404"
import Candidates from "./admin_routes/candidates"
import CompanyPositions from "./admin_routes/company_positions"
import AdminDashboardContent from "./admin_routes/dashboardContent"
import ElectoralDetails from "./admin_routes/electoralDetails"
import Reports from "./admin_routes/reports"
import VacancyPositions from "./admin_routes/vacancy_positions"
import MainListItems from "./listItems"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    marginTop: "69px",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },

  menuButton: {
    marginRight: 0,
    [theme.breakpoints.up("sm")]: {
      marginRight: 9
    }
  },
  menuButtonHidden: {
    display: "none"
  },
  chevButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: theme.palette.primary.contrastText,
    paddingTop: 0,
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8.5)
    }
  },
  // appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}))

function AdminDashboard() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  let { path, url } = useRouteMatch()

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Router>
      <Box className={classes.root}>
        <CssBaseline />
        <Box color="primary">
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(
                classes.drawerPaper,
                !open && classes.drawerPaperClose
              )
            }}
            open={open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton
                color="primary"
                onClick={() => {
                  handleDrawerClose()
                }}
                className={clsx(classes.menuButton, open)}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                edge="start"
                color="primary"
                aria-label="open drawer"
                onClick={() => {
                  handleDrawerOpen()
                }}
                className={clsx(
                  classes.menuButton,
                  open && classes.menuButtonHidden
                )}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <MainListItems parentURL={url} />
            </List>
            <Divider />
          </Drawer>
        </Box>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route exact path={path}>
                <AdminDashboardContent />
              </Route>
              <Route path={`${path}/:subRouteID`}>
                <AdminSubRoutesLevel1 />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </Container>
        </main>
      </Box>
    </Router>
  )
}

export default AdminDashboard



function AdminSubRoutesLevel1() {
  let { subRouteID } = useParams()

  let AdminSubComponent = <h2>Unknown Content</h2>

  switch (subRouteID) {
    case "candidates":
      AdminSubComponent = <Candidates />
      break
    case "company_positions":
      AdminSubComponent = <CompanyPositions />
      break

    case "current_vacancies":
      AdminSubComponent = <VacancyPositions />
      break

    case "reports":
      AdminSubComponent = <Reports />
      break

    case "electoral_details":
      AdminSubComponent = <ElectoralDetails />
      break
    default:
      break
  }
  return AdminSubComponent
}
