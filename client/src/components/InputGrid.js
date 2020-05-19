import React from "react"
import { makeStyles, Grid, FormLabel, Box, Typography } from "@material-ui/core"
// import { Block } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  input: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "30px",
    // padding: "2px",
    [theme.breakpoints.down("sm")]: {
      height: "70px",
      float: "right",
      justifyContent: "justify"
    }
  },
  inputLabel: {
    color: theme.palette.secondary.contrastText,
    display: "flex",
    alignItems: "center",
    padding: "5px",
    justifyContent: "flex-start",
    width: "100%",
    lineHeight: 1.5,
    [theme.breakpoints.down("sm")]: {
      height: 2
    }
  },
  InputGridMain: {
    display: "flex",
    paddingTop: 10,
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    [theme.breakpoints.down("sm")]: {
      height: "max-content"
      // width: 200
    }
  }
}))

const InputGrid = ({ labelName, children, info, required }) => {
  const classes = useStyles()

  return (
    <Box boxShadow={2} borderRadius={5}>
      <Grid container className={classes.InputGridMain}>
        <Grid item xs={12} sm={12} md={8}>
          <FormLabel
            variant="filled"
            id="simple-select-required-label"
            className={classes.inputLabel}
          >
            {labelName}
            {required ? (
              <p style={{ color: "red", fontWeight: "bold" }}> *</p>
            ) : null}
          </FormLabel>
          <br />
          <Typography className={classes.inputLabel} variant="caption">
            {info ? info : null}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={classes.input}>
          <main>{children}</main>
        </Grid>
      </Grid>
    </Box>
  )
}

export default InputGrid
