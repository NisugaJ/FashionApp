import {
  CircularProgress,
  FormControl,
  FormGroup,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography
} from "@material-ui/core"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import MuiDialogActions from "@material-ui/core/DialogActions"
import MuiDialogContent from "@material-ui/core/DialogContent"
import { withStyles } from "@material-ui/core/styles"
import CheckIcon from "@material-ui/icons/Check"
import EditIcon from "@material-ui/icons/Edit"
import { DropzoneArea } from "material-ui-dropzone"
import React, { useEffect, useState } from "react"
import Buttonv2 from "../../../../components/button"
import ErrorPrompt from "../../../../components/ErrorPrompt"
import ProgressSpinner from "../../../../components/LoadingDataProgressSpinner"
import baseAxios from "../../../../config/axios"
import backend_config from "../../../../config/backend_config"

const ImageStyles = {
  width: "100%",
  height: "auto"
}

const useStyles = makeStyles(theme => ({
  Dialog: {
    width: "100%"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

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

export default function EditVacancyDialog({ rowData, currentPositions }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const classes = useStyles()

  const [selectedVacancyId, setSelectedVacancyId] = React.useState(
    rowData.positionId
  )
  const [selectedPositionId, setSelectedPositionId] = React.useState(
    rowData.companyPosition.positionId
  )
  const [selectedImage, setSelectedImage] = React.useState({ image: {} })

  const [fetchedPositions, setFetchedPositions] = useState({
    data: currentPositions
  })
  const [error, setError] = useState(null)
  const [updateStatus, setSaveStatus] = useState(false)
  const [submitClicked, setSubmitClicked] = useState(false)

  //Removing Errorprompt when a position is selected
  useEffect(() => {
    if (selectedPositionId != null) setError(null)
  }, [selectedPositionId])

  //Assigning the vacancyId of the the selected vacancy
  const handleChange = event => {
    setSelectedPositionId(event.target.value)
    setSubmitClicked(false)
  }

  //Assigning the file data to file on selected image
  const handleFileChange = file => {
    console.log(file)
    setSelectedImage({ image: file[0] })
  }

  //Handling submission of a vacancy
  const handleVacancySubmit = () => {
    setSubmitClicked(true)

    if (
      selectedPositionId === rowData.companyPosition.positionId &&
      Array.isArray(selectedImage.image)
    ) {
      //prompting error if no new position or no new image is selected
      setError({ message: "No changes detected", type: "input" })
      return
    }

    async function updateEditedVacancyData() {
      var formData = new FormData()
      formData.append("companyPositionId", selectedPositionId)
      formData.append("image", selectedImage.image)
      try {
        var response = await baseAxios.post(
          "position/update?id=" + selectedVacancyId,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + sessionStorage.getItem("access_token")
            }
          }
        )
        console.log(response.data)
        if (response.data.status === "OK") {
          setSaveStatus(true)
          setTimeout(function() {
            window.location.reload()
          }, 500)
        }
        if (response.data.status === "FAILED") setError(response.data)
      } catch (error) {
        console.log(error)
        setError(error)
      }
    }
    updateEditedVacancyData()
  }

  if (!fetchedPositions.data.length > 0) {
    return <ProgressSpinner error={error || null} />
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <EditIcon />
      </Button>

      <Dialog
        className={classes.Dialog}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <form>
            <Typography variant="h6">Update Vacancy</Typography>
            <FormGroup>
              <FormControl className={classes.formControl}>
                <InputLabel style={{ marginTop: 5 }} id="select-label">
                  Position
                </InputLabel>
                <Select
                  labelId="select-position"
                  id="select-position-id"
                  value={
                    selectedPositionId
                      ? selectedPositionId
                      : rowData.companyPosition.positionId
                  }
                  onChange={handleChange}
                >
                  {fetchedPositions.data.map((item, index) => (
                    <MenuItem key={item.positionId} value={item.positionId}>
                      {item.positionTitle}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl style={{ marginTop: 20 }}>
                <Grid container>
                  <Grid item sm={6} xs={6}>
                    <InputLabel id="add-image-label">
                      Advertising Image
                    </InputLabel>
                  </Grid>

                  <Grid item sm={6} xs={6}>
                    <img
                      style={{ height: "auto", width: 100, margin: 10 }}
                      src={backend_config.baseURL + rowData.imagePath}
                    />
                  </Grid>
                </Grid>

                <DropzoneArea
                  acceptedFiles={["image/*"]}
                  showFileNamesInPreview={true}
                  maxFileSize={5000000}
                  filesLimit={1}
                  useChipsForPreview={true}
                  onChange={handleFileChange}
                />
              </FormControl>
              <FormControl>
                <div
                  style={{
                    height: 50,
                    display: "flex",
                    // width: "max-content",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div>
                    <Buttonv2
                      style={{ flex: "auto" }}
                      variant="contained"
                      color="primary"
                      onClick={handleVacancySubmit}
                    >
                      Update
                    </Buttonv2>
                  </div>

                  <div style={{ flex: "auto" }}>
                    {updateStatus && submitClicked ? (
                      <CheckIcon color="primary" />
                    ) : submitClicked ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : null}
                  </div>
                  {error != null ? <ErrorPrompt error={error} /> : null}
                </div>
              </FormControl>
            </FormGroup>
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
