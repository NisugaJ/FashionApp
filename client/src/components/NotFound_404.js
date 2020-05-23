import {
  Card,
  CardActionArea,
  Typography,
  CardActions,
  makeStyles,
  CardContent,
  Box
} from "@material-ui/core"
import Buttonv2 from "./button"
import { useLocation } from "react-router-dom"
import React from "react"
import Skeleton from "@material-ui/lab/Skeleton"

const useStyles = makeStyles({
  boxRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh"
  },
  card: {
    maxWidth: 345
  }
})

function NoMatch() {
  const classes = useStyles()

  let location = useLocation()

  return (
    <Box className={classes.boxRoot}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Skeleton
              variant="rect"
              width={"max-content"}
              height={"auto"}
              style={{ padding: 5, borderRadius: 3 }}
              className={classes.Skeleton}
            >
              <Typography gutterBottom variant="h5" component="h2">
                <Typography color="primary">{location.pathname}</Typography>Page
                Not Found !
              </Typography>
            </Skeleton>
            <Typography variant="body2" color="textSecondary" component="p">
              Looks like you've followed a broken link or entered a URL that
              doesn't exist on this site.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Buttonv2 href="/" size="small" color="primary">
            Home
          </Buttonv2>
          <Buttonv2 size="small" color="primary">
            Learn More
          </Buttonv2>
        </CardActions>
      </Card>
    </Box>
  )
}

export default NoMatch
