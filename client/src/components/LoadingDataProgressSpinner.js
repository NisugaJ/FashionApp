import {
  Button,
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh"
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

const ProgressSpinner = ({ error }) => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item sm={12} xs={12} className={classes.gridContent}>
          <CircularProgress />
        </Grid>
        <Grid item sm={12} xs={12} className={classes.gridContent}>
          <p style={{ textAlign: "center" }}>
            Hold on. We are loading data{" "}
            <span role="img" aria-label="unicorn-icon">
              🦄
            </span>
          </p>
        </Grid>
        <Grid item sm={12} xs={12} className={classes.gridContent}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              window.location.reload()
            }}
          >
            Reload
          </Button>
        </Grid>
        <Grid item sm={12} xs={12} className={classes.gridContent}>
          {error != null ? (
            <Skeleton
              variant="rect"
              width={"max-content"}
              height={"auto"}
              className={classes.Skeleton}
            >
              <p>
                If it takes longer, there may be a network/system problem. Try
                Again after sometime or contact SiteAdmin.
              </p>
              <Typography color="error" component="rect">
                <b>
                  <span role="img" aria-label="sad-face-icon">
                    😟
                  </span>
                  Error:
                </b>
                {error.message}
              </Typography>
            </Skeleton>
          ) : null}
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProgressSpinner
