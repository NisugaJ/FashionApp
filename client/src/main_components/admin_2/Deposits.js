import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
})

export default function Deposits() {
  const classes = useStyles()
  return (
    <div>
      <Grid container>
        <Grid item sm={8}>
          <Typography component="p" variant="h6" color="primary">
            Total Candidates{" "}
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography component="p" variant="h6">
            5
          </Typography>
        </Grid>
        <Typography className={classes.depositContext}>
          on 15 March, 2019
        </Typography>
      </Grid>
    </div>
  )
}
