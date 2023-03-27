import React from "react";
import { Navbar } from "../../../layouts/userLayouts/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../utility/Theme";
import { Footer } from "../../../layouts/userLayouts/Footer";
import { Banner } from "../../../components/UserComponents/Banner";
import { Cards } from "../../../components/UserComponents/Cards";

// const theme = createTheme({
//   palette: {
//     secondary: {
//       main: "#BDCDD6",
//     },
//     info: {
//       main: "#42a5f5",
//     },
//     warning: {
//       main: "#D61355",
//     },
//   },
// });
export default function UserHome() {
  console.log("home calling");
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
}
