import { Box } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import "react-awesome-slider/dist/styles.css"
import baseAxios from "../config/axios"
import backend_config from "../config/backend_config"

const AutoplaySlider = withAutoplay(AwesomeSlider)

const VacancySlideShow = () => {
  const [allPhotos, setAllPhotos] = useState({ data: null })

  async function fetchDataForAppSlide() {
    let ignore = false
    try {
      const result_CurrentPositions = await baseAxios.get("/positions")
      if (!ignore && result_CurrentPositions.data) {
        let photos = result_CurrentPositions.data.map(
          ({ imagePath }) => imagePath
        )
        setAllPhotos({ data: photos })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDataForAppSlide()
    console.log("fetched")
    console.log(JSON.stringify(allPhotos.data))
  }, [])

  const startUpScreen = (
    <div>
      <img data-src="../../../loading.jpg" />
    </div>
  )

  return (
    <Box boxShadow={2}>
      {allPhotos.data != null ? (
        <AutoplaySlider
          organicArrows={false}
          bullets={false}
          play={true}
          cancelOnInteraction={true}
          interval={6000}
          startUpScreen={startUpScreen}
          style={{
            backgroundColor: "white",
            height: 700,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {allPhotos.data.map(item => (
            <Box
              component="div"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "right",
                "& a::before": {
                  paddingTop: "100%",
                  float: "left"
                },
                "& a::after": {
                  content: "",
                  display: "block",
                  clear: "both"
                }
              }}
            >
              <img
                style={{ borderRadius: 5 }}
                draggable={false}
                width="100%"
                height="100%"
                style={{ padding: 100 }}
                key={item}
                style={{ borderRadius: 5 }}
                src={backend_config.baseURL + item}
              />
            </Box>
          ))}
        </AutoplaySlider>
      ) : null}
    </Box>
  )
}

export default VacancySlideShow
