import React from "react";
import theme from "../styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import HowItWorks from "../components/HowItWorks";

export default function How() {
  return (
    <ThemeProvider theme={theme}>
      <HowItWorks />
    </ThemeProvider>
  );
}
