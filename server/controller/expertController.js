const postSignUp = async (req, res) => {
  console.log("expert function calling");
  try {
    console.log("expert controller calling");
    const { firstName, lastName, email, phoneNumber, password } =
      req.body.values;
    const { imageData, cityData } = req.body;
    

  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  postSignUp,
};
