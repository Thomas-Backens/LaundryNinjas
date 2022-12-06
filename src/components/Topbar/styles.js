import { makeStyles } from "@material-ui/core";
import theme from "../../styles/theme";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: 80,
    zIndex: 999,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    paddingLeft: theme.spacing(3),
  },
  title: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.h2.fontSize,
    fontWeight: 600,
  },
}));

export default useStyles;
