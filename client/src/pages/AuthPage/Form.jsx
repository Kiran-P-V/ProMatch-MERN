import React from "react";
import {
  TextField,
  Link,
  Grid,
  Button,
  Typography,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useFormik } from "formik";
import { signUpSchema, signInSchema } from "../../schemas/FormSchema";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import apiCalls from "../../EndPoints/Apicalls";

const initialValuesSignUP = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const initialValuesSignIn = {
  email: "",
  password: "",
};

export default function Form(props) {
  const initialValues =
    props.access === "signup" ? initialValuesSignUP : initialValuesSignIn;
  const schema = props.access === "signup" ? signUpSchema : signInSchema;
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: schema,
      onSubmit: async (values, action) => {
        if (props.access === "signup") {
          const response = await apiCalls.signUp(values);
          console.log(response, "response loged at the signup");
        } else {
          const response = await apiCalls.signIn(values);
          console.log(
            response.data.userToken,
            "token loged at the frontend in signin"
          );
          // if(response.data.userToken)
        }
        action.resetForm();
      },
    });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {(() => {
        if (props.access === "signin") {
          return (
            // signin form starting
            <Box>
              <Typography
                sx={{ color: "info.main", textAlign: "center" }}
                component="h1"
                variant="h5"
              >
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  helperText={touched.email && errors.email}
                  error={Boolean(touched.email) && Boolean(errors.email)}
                  InputProps={{
                    sx: { bgcolor: "primary.contrastText", borderRadius: 3 },
                  }}
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  helperText={touched.password && errors.password}
                  error={Boolean(touched.password) && Boolean(errors.password)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                    sx: { bgcolor: "primary.contrastText", borderRadius: 3 },
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="filled"
                  sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: "info.main",
                    "&:hover": {
                      bgcolor: "info.dark",
                    },
                  }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/user/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            // signin form ending
          );
        } else if (props.access === "signup") {
          return (
            // signup form starting
            <Box
              sx={{
                backgroundColor: "#161b22",
                marginTop: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ color: "info.main", fontWeight: "bold" }}
                component="h1"
                variant="h5"
              >
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      InputProps={{
                        sx: {
                          bgcolor: "primary.contrastText",
                          borderRadius: 3,
                        },
                      }}
                      helperText={touched.firstName && errors.firstName}
                      error={
                        Boolean(touched.firstName) && Boolean(errors.firstName)
                      }
                      sx={{ borderRadius: 3 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      InputProps={{
                        sx: {
                          bgcolor: "primary.contrastText",
                          borderRadius: 3,
                        },
                      }}
                      autoComplete="family-name"
                      helperText={touched.lastName && errors.lastName}
                      error={
                        Boolean(touched.lastName) && Boolean(errors.lastName)
                      }
                      sx={{ borderRadius: 3 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      InputProps={{
                        sx: {
                          bgcolor: "primary.contrastText",
                          borderRadius: 3,
                        },
                      }}
                      autoComplete="email"
                      helperText={touched.email && errors.email}
                      error={Boolean(touched.email) && Boolean(errors.email)}
                      sx={{ borderRadius: 3 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      autoComplete="current-password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      helperText={touched.password && errors.password}
                      error={
                        Boolean(touched.password) && Boolean(errors.password)
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                        sx: {
                          bgcolor: "primary.contrastText",
                          borderRadius: 3,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      autoComplete="current-password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      helperText={
                        touched.confirmPassword && errors.confirmPassword
                      }
                      error={
                        Boolean(touched.confirmPassword) &&
                        Boolean(errors.confirmPassword)
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                        sx: {
                          bgcolor: "primary.contrastText",
                          borderRadius: 3,
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: "info.main",
                    "&:hover": {
                      bgcolor: "info.dark",
                    },
                  }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/user/signin" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          );
        }
      })()}
      {/* <SnackbarProvider maxSnack={3}>
        <MyApp />
      </SnackbarProvider> */}
    </>
  );
}
