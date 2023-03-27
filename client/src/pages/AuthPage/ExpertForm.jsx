import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../../images/logo.png";
import { Stack } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import "./ExpertForm.css";
import { LocationForm } from "../../components/UserComponents/UseGeoLocation";
import { ImageUpload } from "../../components/UserComponents/ImageUpload";
import { expertSignUpSchema } from "../../schemas/FormSchema";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import ExpertApiCalls from "../../EndPoints/ExpertApiCalls";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
};

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export const ExpertForm = () => {
  const [imageData, setData] = useState("");
  const [cityData, setCityData] = useState("");

  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  const schema = expertSignUpSchema;

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: schema,
      onSubmit: async (values, action) => {
        const response = await ExpertApiCalls.expertSignup({
          values,
          imageData,
          cityData,
        });
        action.resetForm();
      },
    });

  const handleDataChange = (newData) => {
    setData(newData);
  };

  const handleCityData = (city) => {
    setCityData(city);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          sx={{ width: !isSmallScreen ? "50vw" : null }}
          component="main"
        >
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
              justifyContent: "center",
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
            <Typography sx={{ color: "white" }} component="h1" variant="h5">
              Sign up as an expert
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Stack spacing={2} direction={!isSmallScreen ? "row" : "column"}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      value={values.firstName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      helperText={touched.firstName && errors.firstName}
                      error={
                        Boolean(touched.firstName) && Boolean(errors.firstName)
                      }
                      InputProps={{
                        sx: {
                          bgcolor: "primary.contrastText",
                          borderRadius: 3,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      value={values.lastName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      helperText={touched.lastName && errors.lastName}
                      error={
                        Boolean(touched.lastName) && Boolean(errors.lastName)
                      }
                      InputProps={{
                        sx: {
                          bgcolor: "primary.contrastText",
                          borderRadius: 3,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(touched.email) && Boolean(errors.email)}
                      InputProps={{
                        sx: {
                          bgcolor: "primary.contrastText",
                          borderRadius: 3,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={
                        Boolean(touched.password) && Boolean(errors.password)
                      }
                      InputProps={{
                        sx: {
                          bgcolor: "primary.contrastText",
                          borderRadius: 3,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="phoneNumber"
                      label="Phone Number"
                      type="tel"
                      id="phoneNumber"
                      autoComplete="tel"
                      value={values.phoneNumber}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                      error={
                        Boolean(touched.phoneNumber) &&
                        Boolean(errors.phoneNumber)
                      }
                      InputProps={{
                        sx: {
                          bgcolor: "primary.contrastText",
                          borderRadius: 3,
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid
                    sx={{ marginTop: !isSmallScreen && -4 }}
                    item
                    xs={12}
                    sm={12}
                  >
                    <LocationForm onDataUpdate={handleCityData} />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <ImageUpload onDataUpdate={handleDataChange} />
                  </Grid>
                </Grid>
              </Stack>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign Up
                </Button>
              </Box>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>{" "}
    </>
  );
};
