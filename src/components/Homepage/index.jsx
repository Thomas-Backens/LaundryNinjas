import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

export default function Homepage() {
  const s = useStyles();

  return (
    <Box>
      <Typography className={s.title}>HOME</Typography>
    </Box>
  );
}
