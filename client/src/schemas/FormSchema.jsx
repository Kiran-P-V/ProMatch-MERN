import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstName: Yup.string().min(3).max(25).required("Please enter your name"),
  lastName: Yup.string().min(1).max(25).required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const signInSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});

export const expertSignUpSchema = Yup.object({
  firstName: Yup.string().min(3).max(25).required("Please enter your name"),
  lastName: Yup.string().min(1).max(25).required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  phoneNumber: Yup.string()
    .min(10)
    .max(10)
    .required("Please enter a valid phone number "),
});
