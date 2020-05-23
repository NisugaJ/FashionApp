import React from "react"
import { Grid, Paper, makeStyles } from "@material-ui/core"
import Chart from "../Chart"
import Deposits from "../Deposits"
import clsx from "clsx"
import SumbissionsByPosition from "../submissionsByPosition"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}))

export default () => {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    // Dashboard Content
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Submission Counts */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Deposits />
        </Paper>
      </Grid>
      {/* Recent Sumbissions By Position */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <SumbissionsByPosition />
        </Paper>
      </Grid>
    </Grid>
  )
}
