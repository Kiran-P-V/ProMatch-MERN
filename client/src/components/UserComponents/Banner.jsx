import { Box } from "@mui/system";
import React from "react";
import BannerImage from "../../images/BannerImage.jpg";
import { Typography, TextField, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {matches && (
        <Box sx={{ position: "relative", mt: 11 }}>
          <Box
            component="img"
            src={BannerImage}
            sx={{ width: "100%", borderRadius: 2 }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: 700,
              width: "100%",
              padding: 5,
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              borderRadius: 4,
              textAlign: "center",
              marginTop: 0,
              //   opacity:10
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", color: "white" }}
              variant="h2"
              gutterBottom
            >
              Home Services, on demand.
            </Typography>

            <TextField
              fullWidth
              variant="outlined"
              label="Search for services"
              placeholder="Search..."
              InputProps={{
                sx: { bgcolor: "primary.contrastText", borderRadius: 3 },
              }}
            />
          </Box>
        </Box>
      )}
    </>
  );
};
