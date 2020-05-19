import React from "react"
import { Grid, Paper, makeStyles, FormGroup } from "@material-ui/core"
import clsx from "clsx"

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

const Candidates = () => {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    // Dashboard Content
    <Grid container spacing={3}>
      {/* Add Position */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <FormGroup>candids</FormGroup>
        </Paper>
      </Grid>
      {/* Vacancy Positions table */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}></Paper>
      </Grid>
    </Grid>
  )
}

export default Candidates
