import axios from "../utility/axios";

const expertSignup = async (data) => {
  try {
    const response = await axios.post("/expert/signup", data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.message, "this is the try catch error showing");
    return error.response.data;
  }
};

const expertApprove = async (expertId) => {
  try {
    console.log(expertId);
    const response = await axios.post("/expert/approve", expertId);
  } catch (error) {
    console.log(error.message);
  }
};
const ExpertApiCalls = {
  expertSignup,
  expertApprove,
};

export default ExpertApiCalls;
