import { Grid, makeStyles, Paper, Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import ProgressSpinner from "../../../components/LoadingDataProgressSpinner"
import baseAxios from "../../../config/axios"
import AddVacancy from "./current_vacancies/addVacancy"
import VacancyTable from "./current_vacancies/vacancyTables"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    // margin: theme.spacing(1),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  table: {
    padding: theme.spacing(2),
    // margin: theme.spacing(1),
    display: "flex",
    height: "70vh",
    overflow: "auto",
    flexDirection: "column"
  }
}))

const VacancyPositions = () => {
  const classes = useStyles()
  const [fetchedPositions, setFetchedPositions] = useState({ data: [] })
  const [error, setError] = useState(null)

  useEffect(() => {
    /***
     * Fetch all Company Positions
     */
    async function FetchAllCompanyPositions() {
      try {
        const result_AllPositions = await baseAxios.get("/allposition/indexall")
        console.log(result_AllPositions.data)
        setFetchedPositions({ data: result_AllPositions.data })
      } catch (Error) {
        console.log(Error)
        setError(Error)
      }
    }
    FetchAllCompanyPositions() //Execution
  }, [])

  if (!fetchedPositions.data.length > 0) {
    return <ProgressSpinner error={error || null} />
  }

  return (
    // Dashboard Content
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Paper className={classes.paper}>
          <Typography variant="h5" color="primary">
            <b> Vacancies</b>
          </Typography>
        </Paper>
      </Grid>
      {/* Add Position */}
      <Grid item xs={12} md={8} lg={8}>
        <Paper>
          <VacancyTable
            className={classes.table}
            currentPositions={fetchedPositions.data}
          />
        </Paper>
      </Grid>
      {/* Vacancy Positions table */}
      <Grid item xs={12} md={4} lg={4}>
        <Paper className={classes.paper}>
          <AddVacancy currentPositions={fetchedPositions.data} />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default VacancyPositions
