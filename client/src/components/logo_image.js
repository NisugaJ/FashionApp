import React from "react"
import styled from "styled-components"
import { MainOuterTheme } from "../styles/themes"

const styles = {
  color: MainOuterTheme.palette.primary.main
}
const Image = ({ size }) => {
  const cls = `fas fa-crown fa-${size}x`
  return (
    <i class={cls} style={styles} />
    // <ImgStyled

    //   // src="../../../logo.png"
    //   src="/images/"
    //   className="headshot"
    //   alt="Omobio Logo"
    //   title="Omobio Logo"
    // />
  )
}

export default Image
