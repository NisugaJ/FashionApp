import React from "react"
import Skeleton from "@material-ui/lab/Skeleton"
import { Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  Skeleton: {
    borderRadius: 4,
    padding: 10,
    marginTop: 5,
    marginBottom: 5
  }
}))
const ErrorPrompt = ({ error }) => {
  const classes = useStyles()

  return (
    <Skeleton
      variant="rect"
      width={"max-content"}
      height={"auto"}
      className={classes.Skeleton}
    >
      <Typography color="error" component="rect">
        <b>Error:</b>
        {error.message}
      </Typography>
    </Skeleton>
  )
}

export default ErrorPrompt
