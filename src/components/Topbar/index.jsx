import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

export default function Topbar() {
  const s = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      className={s.root}
    >
      <Box>
        <Typography className={s.title}>Laundry Ninjas LLC</Typography>
        <Typography className={s.sub}>Family owned and operated</Typography>
      </Box>
      <Box display="flex">
        <Box className={s.shell}>
          <Button className={s.button}>How it Works</Button>
        </Box>
        <Box className={s.shell}>
          <Button className={s.button}>Login</Button>
        </Box>
        <Box className={s.shell}>
          <Button className={s.button}>New? Sign up</Button>
        </Box>
      </Box>
    </Box>
  );
}
