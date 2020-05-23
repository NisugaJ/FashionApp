import {
  FormGroup,
  Grid,
  makeStyles,
  Paper,
  Table,
  Typography
} from "@material-ui/core"
import clsx from "clsx"
import React from "react"

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

const Reports = () => {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    // Dashboard Content
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Paper className={classes.paper}>
          <Typography variant="h5" color="primary">
            {" "}
            <b>Reports</b>
          </Typography>
        </Paper>
      </Grid>
      {/* Add Position */}
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={fixedHeightPaper}>
          <FormGroup>reports</FormGroup>
        </Paper>
      </Grid>
      {/* Vacancy Positions table */}
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={fixedHeightPaper}>
          <Table></Table>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Reports
