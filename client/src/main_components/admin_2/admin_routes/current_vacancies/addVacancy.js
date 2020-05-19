import {
  CircularProgress,
  FormControl,
  FormGroup,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography
} from "@material-ui/core"
import CheckIcon from "@material-ui/icons/Check"
import { DropzoneArea } from "material-ui-dropzone"
import React, { useEffect, useState } from "react"
import Buttonv2 from "../../../../components/button"
import ErrorPrompt from "../../../../components/ErrorPrompt"
import ProgressSpinner from "../../../../components/LoadingDataProgressSpinner"
import baseAxios from "../../../../config/axios"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

const AddVacancy = ({ currentPositions, fetchCurrentVacancies }) => {
  const classes = useStyles()
  const [selectedVacanacyId, setSelectedVacancyId] = React.useState(null)
  const [selectedImage, setSelectedImage] = React.useState({ image: [] })

  const [fetchedPositions, setFetchedPositions] = useState({
    data: currentPositions
  })
  const [error, setError] = useState(null)
  const [saveStatus, setSaveStatus] = useState(false)
  const [submitClicked, setSubmitClicked] = useState(false)

  //Removing Errorprompt when a position is selected
  useEffect(() => {
    if (selectedVacanacyId != null) setError(null)
  }, [selectedVacanacyId])

  //Assigning the vacancyId of the the selected vacancy
  const handleChange = event => {
    setSelectedVacancyId(event.target.value)
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

    if (selectedVacanacyId == null) {
      //prompting error if no position is selected
      setError({ message: "Position cannot be empty", type: "input" })
      return
    }

    async function postVacancyData() {
      var formData = new FormData()
      formData.append("companyPositionId", selectedVacanacyId)
      formData.append("image", selectedImage.image || null)
      try {
        var response = await baseAxios.post("position/createnew", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + sessionStorage.getItem("access_token")
          }
        })
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

    postVacancyData()
  }

  if (!fetchedPositions.data.length > 0) {
    return <ProgressSpinner error={error || null} />
  }

  return (
    <form>
      <Typography variant="h6">Add Vacancy</Typography>
      <FormGroup>
        <FormControl className={classes.formControl}>
          <InputLabel style={{ marginTop: 5 }} id="select-label">
            Position
          </InputLabel>
          <Select
            labelId="select-position"
            id="select-position-id"
            value={selectedVacanacyId ? selectedVacanacyId : ""}
            onChange={handleChange}
          >
            {fetchedPositions.data.map((item, index) => (
              <MenuItem key={item.positionId} value={item.positionId}>
                {item.positionTitle}
              </MenuItem>
            ))}
          </Select>
          {error != null ? <ErrorPrompt error={error} /> : null}
        </FormControl>
        <FormControl style={{ marginTop: 20 }}>
          <InputLabel id="add-image-label">Advertising Image</InputLabel>

          <DropzoneArea
            acceptedFiles={["image/*"]}
            showFileNamesInPreview={true}
            maxFileSize={5000000}
            height="200"
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
                Submit
              </Buttonv2>
            </div>

            <div style={{ flex: "auto" }}>
              {saveStatus && submitClicked ? (
                <CheckIcon color="primary" />
              ) : submitClicked ? (
                <CircularProgress size={20} color="inherit" />
              ) : null}
            </div>
          </div>
        </FormControl>
      </FormGroup>
    </form>
  )
}

export default AddVacancy
