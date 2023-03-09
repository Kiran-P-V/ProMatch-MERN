import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../../images/logo.png";
import Form from "./Form";
import { AdminForm } from "./AdminForm";

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
export default function AuthPage(props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "#161b22",
              padding: 3,
              borderRadius: 3,
            }}
          >
            <Avatar
              sx={{
                m: 1,
                width: 56,
                height: 56,
                bgcolor: "rgba(0, 0, 0, 0.0)",
              }}
            >
              <img
                alt="logo"
                style={{ width: "120px", height: "120px" }}
                src={Logo}
              />
            </Avatar>
            {props.access === "signin" || props.access === "signup" ? (
              <Form access={props.access} />
            ) : props.access === "adminSignin" ? (
              <AdminForm access={props.access} />
            ) : null}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
