import React from "react"
import { MoreVert } from "@material-ui/icons"
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  ButtonGroup,
  Link,
  MenuItem,
  Menu,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContentText,
  DialogContent
} from "@material-ui/core"
import Button from "../components/button"
import Image from "./logo_image"
import { logOut, getUserFirstName } from "./auth"
import { AuthConsumer } from "../config/authContext"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  logoButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    // flexGrow: 1.5,
    // color: "red"
    fontWeight: "bold",

  },
  titleLink: {
    "&:hover": {
      color: theme.palette.primary.dark
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  grow: {
    flexGrow: 1
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}))

const TopAppBar = ({ siteTitle, isLoggedIn }) => {
  const classes = useStyles()

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const [open, setOpen] = React.useState(false) // Logout DialogBox open/close

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      {isLoggedIn ? (
        <div>
          <Link
            color="textPrimary"
            href="/dashboard"
            style={{ textDecoration: "none" }}
          >
            <MenuItem>My Dashboard</MenuItem>
          </Link>

          <Link
            color="textPrimary"
            href="/dashboard"
            style={{ textDecoration: "none" }}
            onClick={() => {
              logOut()
            }}
          >
            <MenuItem>Logout</MenuItem>
          </Link>
        </div>
      ) : (
          <Link
            color="textPrimary"
            href="/dashboard"
            style={{ textDecoration: "none" }}
          >
            <MenuItem>Login</MenuItem>
          </Link>
        )}
    </Menu>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Toolbar>
          <Button
            className={classes.logoButton}
            color="inherit"
            aria-label="logo"
          >
            <a href="/">
              <Image size={4} />
            </a>
          </Button>
          <Typography variant="h4" className={classes.title}>
            <Link
              className={classes.titleLink}
              href="/"
              style={{ textDecoration: "none", textAlign: "center", }}
              color="textPrimary"
            >
              {siteTitle}
            </Link>
          </Typography>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <Typography variant="h5" component="label" style={{ fontWeight: "bold", marginTop: "0.3rem", marginRight: "1rem", color: "black" }}>
              {getUserFirstName()}
            </Typography>
            <AuthConsumer>
              {isLoggedIn ? (
                <ButtonGroup
                  color="primary"
                  variant="contained"
                  aria-label="outlined secondary button group"
                  anchororigin={{ vertical: "top", horizontal: "right" }}
                  keepmounted="true"
                  transformorigin={{ vertical: "top", horizontal: "right" }}
                >
                  <Button href="/dashboard" color="primary">
                    Dashboard
                  </Button>

                  <Button onClick={handleClickOpen} color="primary">
                    Logout
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Are you sure want to logout ?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Please click Yes or No
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        No
                      </Button>
                      <Button
                        href="/dashboard"
                        onClick={() => {
                          logOut()
                        }}
                        color="primary"
                        autoFocus
                      >
                        Yes
                      </Button>
                    </DialogActions>
                  </Dialog>
                </ButtonGroup>
              ) : (
                  <Button href="/dashboard" color="primary" variant="contained">
                    Login
                  </Button>
                )}
            </AuthConsumer>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  )
}

export default TopAppBar
