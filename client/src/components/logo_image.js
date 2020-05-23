import React from "react"
import { MainOuterTheme } from "../styles/themes"

const styles = {
  color: MainOuterTheme.palette.secondary.contrastText
}
const LogoImage = ({ size }) => {
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

export default LogoImage
