import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import DashboardIcon from "@material-ui/icons/Dashboard"
import BarChartIcon from "@material-ui/icons/BarChart"
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd"
import { Collapse, makeStyles, List } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import PeopleIcon from "@material-ui/icons/People"
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline"
import PersonPinIcon from "@material-ui/icons/PersonPin"

import CommonLink from "../../components/CommonLink"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}))

const MainListItems = ({ parentURL }) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div>
      <CommonLink path={`${parentURL}`}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </CommonLink>

      <CommonLink path={`${parentURL}/candidates`}>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Candidates" />
        </ListItem>
      </CommonLink>

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIndIcon />
        </ListItemIcon>
        <ListItemText primary="Positions" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <CommonLink path={`${parentURL}/company_positions`}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Company Positions" />
            </ListItem>
          </CommonLink>

          <CommonLink path={`${parentURL}/current_vacancies`}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <PeopleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Current Vacancies" />
            </ListItem>
          </CommonLink>
        </List>
      </Collapse>

      <CommonLink path={`${parentURL}/reports`}>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </CommonLink>

      <CommonLink path={`${parentURL}/electoral_details`}>
        <ListItem button>
          <ListItemIcon>
            <PersonPinIcon />
          </ListItemIcon>
          <ListItemText primary="Electoral Details" />
        </ListItem>
      </CommonLink>
    </div>
  )
}

export default MainListItems
