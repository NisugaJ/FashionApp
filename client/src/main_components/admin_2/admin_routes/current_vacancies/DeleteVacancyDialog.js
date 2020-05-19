import {
  CircularProgress,
  DialogContentText,
  DialogTitle
} from "@material-ui/core"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import MuiDialogActions from "@material-ui/core/DialogActions"
import MuiDialogContent from "@material-ui/core/DialogContent"
import { withStyles } from "@material-ui/core/styles"
import CheckIcon from "@material-ui/icons/Check"
import DeleteIcon from "@material-ui/icons/Delete"
import React from "react"
import ErrorPrompt from "../../../../components/ErrorPrompt"
import baseAxios from "../../../../config/axios"

const ImageStyles = {
  width: "100%",
  height: "auto"
}

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

export default function DeleteVacancyDialog({ rowData, refreshFunc }) {
  const [open, setOpen] = React.useState(false)
  const [deleted, setDeleted] = React.useState(false)
  const [deleting, setDeleting] = React.useState(false)
  const [error, setError] = React.useState(null)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <DeleteIcon />
      </Button>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure want to delete this Vacancy ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please click Yes or No
          </DialogContentText>
          {deleting ? <CircularProgress /> : null}
          {deleted ? <CheckIcon /> : null}
          {error != null ? <ErrorPrompt error={error} /> : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button
            onClick={() => {
              setDeleting(true)
              baseAxios
                .delete("position/delete?id=" + rowData.positionId, {
                  headers: {
                    Authorization:
                      "Bearer " + sessionStorage.getItem("access_token")
                  }
                })
                .then(response => {
                  console.log(response)
                  if (response.status === 204) {
                    setDeleting(false)
                    setDeleted(true)
                    refreshFunc()
                  }
                })
                .catch(error => {
                  setError(error)
                })
            }}
            color="primary"
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
