import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

export default function HowItWorks() {
  const s = useStyles();

  return (
    <Box>
      <Typography className={s.title}>How it Works</Typography>
    </Box>
  );
}
