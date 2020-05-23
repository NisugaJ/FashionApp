import {
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    // height: "80vh"
  },
  gridContent: {
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  Skeleton: {
    borderRadius: 4,
    padding: 10
  }
}))

const PureProgressSpinner = ({ message }) => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item sm={12} xs={12} className={classes.gridContent}>
          <CircularProgress />
        </Grid>
        <Grid item sm={12} xs={12} className={classes.gridContent}>
          <Typography> {message}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PureProgressSpinner
