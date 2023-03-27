import axios from "../utility/axios";

const expertSignup = async (data) => {
  try {
    const response = await axios.post("/expert/signup", data);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const ExpertApiCalls = {
  expertSignup,
};

export default ExpertApiCalls;
