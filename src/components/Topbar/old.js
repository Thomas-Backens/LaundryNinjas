import { makeStyles } from "@material-ui/core";
import theme from "../../styles/theme";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    backgroundColor: theme.palette.surface.white,
    width: "100%",
    height: 200,
    zIndex: 999,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  title: {
    height: 50,
    color: theme.palette.surface.black,
    fontSize: theme.typography.h2.fontSize,
    fontWeight: 600,
  },
  sub: {
    color: theme.palette.surface.black,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 600,
    textAlign: "center",
  },
  shell: {
    marginLeft: theme.spacing(2),
    width: 180,
    height: 45,
    "& > *": {
      marginTop: 0,
      transition: "0.2s",
    },
    "&:hover": {
      "& > *": {
        backgroundColor: theme.palette.surface.grey,
        marginTop: -10,
      },
    },
  },
  button: {
    backgroundColor: theme.palette.surface.black,
    color: theme.palette.surface.white,
    fontSize: theme.typography.h5.fontSize,
    textTransform: "none",
    borderRadius: 8,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
    width: "100%",
    height: "100%",
  },
}));

export default useStyles;
