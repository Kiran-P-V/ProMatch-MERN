import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiCalls from "../../EndPoints/Apicalls";
import { signInSchema } from "../../schemas/FormSchema";
import { useDispatch, useSelector } from "react-redux";
import { adminActions } from "../../Redux/reducers/adminReducer";
import { useSnackbar } from "notistack";

const initialValues = {
  email: "",
  password: "",
};
export const AdminForm = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToken = useSelector((state) => state.admin.token);

  useEffect(() => {
    if (userToken) {
      navigate("/admin/home");
    } else {
      navigate("/admin/signin");
    }
  }, [userToken, navigate]);

  const schema = signInSchema;
  function handleClickVariant(variant, response) {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(response, { variant });
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: schema,
      onSubmit: async (values, action) => {
        if (props.access === "adminSignin") {
          const response = await apiCalls.adminSignIn(values);

          if (response.message) {
            handleClickVariant("error", response.message);
          }
          if (response.data.data.adminToken) {
            dispatch(adminActions.setAdminLogin(response.data.data.adminToken));
            handleClickVariant("info", response.data.message);
            navigate("/admin/home");
          }
        }
        action.resetForm();
      },
    });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Box>
        <Typography
          sx={{ color: "info.main", textAlign: "center" }}
          component="h1"
          variant="h5"
        >
          Admin Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
    </>
  );
};
