import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import React from "react"
import Title from "./Title"

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount }
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Trainee Fullstack Developer",
    "8559865353555",
    "ehebixez-5405@yopmail.com"
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Presley Welok",
    "London, UK",
    "5645365165445",
    "uvegeze-6279@yopmail.com"
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Tech Lead - Back End",
    "6851865254655",
    "silerrepoc-6768@yopmail.com"
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Creative Designer",
    "5648648894853",
    "dennuffixana-8105@yopmail.com"
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Intern - Implementation Engineer",
    "8645186486786",
    "nihemarawa-4842@yopmail.com"
  )
]

function preventDefault(event) {
  event.preventDefault()
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}))

export default function SumbissionsByPosition() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Title>Recent Submissions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Applied For</TableCell>
            <TableCell>NIC</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more submissions
        </Link>
      </div>
    </React.Fragment>
  )
}
