import { Button } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import React, { useEffect, useState } from "react"
import ImageDialog from "../../../../components/ImageDialog"
import baseAxios from "../../../../config/axios"
import DeleteVacancyDialog from "./DeleteVacancyDialog"
import EditVacancyDialog from "./EditVacancyDialog"
const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  tableHeader: {
    fontWeight: "bold",
    fontSize: "0.8rem"
  },
  advertImage: {
    height: 100,
    width: "auto"
  }
})
export default function VacancyTable({ currentPositions }) {
  const [update_positionId, setUpdate_positionId] = React.useState(null)

  const [currentVacancies, setCurrentVavancies] = useState({ data: [] })
  //   positionId: result.data.companyPosition.positionId,
  //   positionTitle: result.data.companyPosition.positionTitle,
  //   imagePath: result.data.imagePath

  //fetching all positions of the company
  async function fetchCurentVacancies() {
    let igonore = false

    if (!igonore) {
      const result = await baseAxios.get("/positions")
      console.log(JSON.stringify(result.data))
      igonore = !igonore
      if (result.data) {
        setCurrentVavancies({
          data: result.data
        })
      }
    }
  }

  useEffect(() => {
    fetchCurentVacancies()
  }, [])

  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeader}>
              Position Title
            </TableCell>
            <TableCell className={classes.tableHeader} align="center">
              Advert Image
            </TableCell>
            <TableCell
              className={classes.tableHeader}
              align="center"
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentVacancies.data.map((row, index, array) => (
            <TableRow key={row.positionId}>
              <TableCell component="th" scope="row">
                {row.companyPosition.positionTitle}
              </TableCell>
              <TableCell align="center">
                <ImageDialog imagePath={row.imagePath} />
              </TableCell>
              <TableCell align="right">
                <Button>
                  <DeleteVacancyDialog
                    rowData={row}
                    refreshFunc={fetchCurentVacancies}
                  />
                </Button>
                <Button>
                  <EditVacancyDialog
                    refreshFunc={fetchCurentVacancies}
                    rowData={row}
                    currentPositions={currentPositions}
                  />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
