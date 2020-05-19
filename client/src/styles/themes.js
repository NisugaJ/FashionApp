import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import { green } from "@material-ui/core/colors"

let MainOuterTheme = createMuiTheme({
  palette: {
    primary: {
      light: "rgb(242, 213, 121)",
      main: "rgb(242, 188, 24)", // Primary Color
      dark: "rgb(196, 148, 0)",
      contrastText: "#FFFFFF"
    },
    secondary: {
      dark: "#a5a7a8",
      light: "#eff2f3",
      main: "#eceff1",
      contrastText: "#000000",
      lightlight: "#d1cdcd"
    },
    error: {
      main: "#b71c1c",
      dark: "#801313",
      light: "#c54949"
    }
    // error - used to represent interface elements that the user should be made aware of.
    // warning - used to represent potentially dangerous actions or important messages.
    // info - used to present information to the user that is neutral and not necessarily important.
    // success - used to indicate the successful completion of an action that user triggered.
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
})

let LowerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: green[500]
    }
  }
})

MainOuterTheme = responsiveFontSizes(MainOuterTheme)
LowerTheme = responsiveFontSizes(LowerTheme)

export { MainOuterTheme, LowerTheme }
