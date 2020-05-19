import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core"

// const StyledButton = styled(Button)`
//   font-size: 15px;
//   width: auto;
//   color: lightgrey;
//   border: 0;
//   background-color: ${MainOuterTheme.palette.primary.main};
//   border-radius: 4px;
//   padding: 5px 15px 5px 15px;
//   float: inherit;

//   .MuiButton-root {
//     height: 500px;
//   }

//   :hover {
//     color: ${MainOuterTheme.palette.primary.main};
//     // box-shadow: 0 0 0 2px rgba(236, 236, 236, 0.246),
//     //   0.3em 0.3em 1em rgb(214, 214, 214);
//   }

//   ${props =>
//     props.secondary &&
//     css`
//       border: 2px solid red;
//       color: black;
//       height: fit-content;
//       padding: 2px 15px 2px 15px;
//       background-color: ${MainOuterTheme.palette.primary.light};
//       :hover {
//         color: lightgrey;
//       }
//     `}
// `

const Buttonv2 = withStyles({
  root: {
    marginRight: 2,
    marginLeft: 2
  }
})(Button)

export default Buttonv2
