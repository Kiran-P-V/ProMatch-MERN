import React from "react";
import { Navbar } from "../../../layouts/userLayouts/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer } from "../../../layouts/userLayouts/Footer";
import { Banner } from "../../../components/UserComponents/Banner";
import { Cards } from "../../../components/UserComponents/Cards";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#BDCDD6",
    },
    info: {
      main: "#42a5f5",
    },
    warning: {
      main: "#D61355",
    },
  },
});
export const UserHome = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Banner />
        <Cards />
        <Footer />
      </ThemeProvider>
    </>
  );
};
