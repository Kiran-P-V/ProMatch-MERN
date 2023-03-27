import { PhotoCamera } from "@mui/icons-material";
import { Box, IconButton, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import Lottie from "lottie-react";
import LottieImg from "../../images/expertFormLottie.json";

export const ImageUpload = (props) => {
  const [imageUrl, setImageUrl] = useState("");

  //handle and convert it in base 64
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const result = reader.result;
      setImageUrl(result);
      props.onDataUpdate(result);
      
    };
  };

  return (
    <>
      <IconButton
        sx={{
          "& input": {
            display: "none",
          },
        }}
        color="primary"
        aria-label="upload picture"
        component="label"
      >
        <PhotoCamera />
        <Input
          sx={{ color: "white" }}
          type="file"
          inputProps={{ accept: "image/*" }}
          onChange={handleImageChange}
        />
        <Typography sx={{ marginLeft: 2 }}>Upload id proof</Typography>
      </IconButton>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Uploaded image"
          style={{
            width: "300px",
            height: "250px",
            border: "1px solid lightgrey",
          }}
        />
      ) : (
        <Box
          sx={{
            width: "300px",
            height: "250px",
            border: "1px solid lightgrey",
          }}
        >
          {<Lottie style={{ height: "30vh" }} animationData={LottieImg} />}
        </Box>
      )}
    </>
  );
};
