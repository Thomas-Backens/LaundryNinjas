import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

export default function Topbar() {
  const s = useStyles();

  return (
    <Box display="flex" alignItems="center" className={s.root}>
      <Typography className={s.title}>Laundry Ninjas</Typography>
    </Box>
  );
}
