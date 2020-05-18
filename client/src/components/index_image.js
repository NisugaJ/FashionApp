import React from "react"
import styled from "styled-components"
import Image from "material-ui-image"

const ImgStyled = styled(Image)`
  border-radius: 5px;

  -webkit-box-shadow: 3px 8px 16px -4px rgba(69, 69, 69, 1);
  -moz-box-shadow: 3px 8px 16px -4px rgba(69, 69, 69, 1);
  box-shadow: 3px 8px 16px -4px rgba(69, 69, 69, 1);
`

const IndexImage = () => {
  return (
    <ImgStyled
    
      src="../../../index_image.png"
      // height="390"
      // width="700"
      className="headshot"
      alt="Index Image"
      title="Index Image"
      aspectRatio={1.3333 / 1}
      disableSpinner={false}
    />
  )
}

export default IndexImage
