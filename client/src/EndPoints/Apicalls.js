import axios from "../utility/axios";

const signUp = async (userData) => {
  try {
    const response = await axios.post("/user/signup", userData);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const signIn = async (userData) => {
  try {
    const response = await axios.post("/user/signin", userData);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const adminSignIn = async (userData) => {
  try {
    const response = await axios.post("/admin/signin", userData);
    console.log("working");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.message)
    return error.response.data;
  }
};
const apiCalls = {
  signUp,
  signIn,
  adminSignIn,
};

export default apiCalls;
