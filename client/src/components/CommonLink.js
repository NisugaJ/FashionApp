import React from "react"
// import { withStyles } from "@material-ui/core"
import { withStyles, Link } from "@material-ui/core"
import { Link as RouterLink } from "react-router-dom"

const CommonLinkStyling = withStyles(theme => ({
  root: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  }
}))(Link)

const CommonLink = ({ path, children }) => {
  return (
    <CommonLinkStyling component={RouterLink} to={path}>
      <main>{children}</main>
    </CommonLinkStyling>
  )
}

export default CommonLink
