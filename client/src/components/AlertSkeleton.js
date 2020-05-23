import React from "react"
import Skeleton from "@material-ui/lab/Skeleton"

const AlertSkeleton = ({ message }) => {
  return (
    <Skeleton
      variant="rect"
      width={"max-content"}
      height={"auto"}
      style={{ borderRadius: 5 }}
    >
      <main>{message}</main>
    </Skeleton>
  )
}

export default AlertSkeleton
