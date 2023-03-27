import axios from "../utility/axios";

// User Api Calls

const signUp = async (userData) => {
  try {
    const response = await axios.post("/user/signup", userData);
    return response;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

const signIn = async (userData) => {
  try {
    console.log(userData)
    const response = await axios.post("/user/signin", userData);
    return response;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

const activateMail = async (activationToken) => {
  try {
    const response = await axios.post("/user/activation", activationToken);
    return response;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

// Admin Api Calls

const adminSignIn = async (userData) => {
  try {
    const response = await axios.post("/admin/signin", userData);
    return response;
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.message);
    return error.response.data;
  }
};
const apiCalls = {
  signUp,
  signIn,
  adminSignIn,
  activateMail,
};

export default apiCalls;
