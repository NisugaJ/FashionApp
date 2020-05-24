import { makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import BaseAxios from "../config/axios"
import { isLogged } from "./auth"
const sweetAlert = require("sweetalert2")
const MSG = styled.div`
  background-color: #ff9494;
  outline: 0;
  border-radius: 4px;
  width: 100%;
  border: 0;
  // margin: 10px 0 15px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 12px;

  transition: opacity 1s ease-out;
  opacity: 0;
`
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const UserLogin = () => {
  //using styles
  const classes = useStyles()

  const history = useHistory()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(isLogged())
  const [invalidLogin, setInvalidLogin] = useState(false)

  useEffect(() => {
    if (isLoggedIn) {
      console.log("Now admin Dashboard should load")
      // history.replace("/login") //Going to admin panel
      window.location.pathname = "/dashboard"
    }
  }, [isLoggedIn, history])

  const LoginUser = event => {
    event.preventDefault()
    BaseAxios.post("/auth/login", {
      username: username,
      password: password
    }).then(response => {
      const data = response.data
      if (data.accessToken && data.user.username) {
        console.log(data);

        sessionStorage.setItem("user", JSON.stringify(data))
        console.log(JSON.parse(sessionStorage.getItem("user")));
        setIsLoggedIn(true)
        console.log("Login Successfull")
      } else {
        sweetAlert.fire({
          position: 'center',
          icon: 'error',
          title: 'Login Failed',
          showConfirmButton: false,
        })
        setInvalidLogin(true)
      }
    }).catch(err => {
      sweetAlert.fire({
        position: 'center',
        icon: 'error',
        title: 'Login Failed',
        showConfirmButton: false,
      })
      setInvalidLogin(true)
    })
  }

  return (
    <Container component="main" maxWidth="sm" color="primary">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h6">
          Log In
        </Typography>
        <form className={classes.form} onSubmit={LoginUser}>
          <MSG style={invalidLogin ? { opacity: 1, height: "auto" } : {}}>
            Invalid Details. Please enter valid credentials
          </MSG>
          <TextField
            type="text"
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="text"
            autoFocus
            onChange={e => {
              setUsername(e.target.value)
              setInvalidLogin(false)
            }}
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={e => {
              setPassword(e.target.value)
              setInvalidLogin(false)
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default UserLogin
