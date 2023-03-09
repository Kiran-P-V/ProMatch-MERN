import React from "react";
import { useTheme } from "@mui/material/styles";
import { AppBar, Typography, useMediaQuery, Divider } from "@mui/material";
import { Stack } from "@mui/system";

export const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <AppBar
        component="div"
        position="static"
        sx={{
          bgcolor: "#161b22",
          marginTop: 5,
        }}
      >
        <Stack
          sx={{ display: "flex", justifyContent: "space-around", padding: 7 }}
          direction={matches ? "row" : "column"}
          spacing={2}
        >
          <Typography sx={{ color: "white",fontWeight:"bold" }} variant="h6" component="h6">
            About ProMatch
            <Stack>
              <Typography sx={{ fontSize: 14, color: "secondary.main" }}>
                ProMatch, the leading home services market network, connects
                <br />
                homeowners with quality home improvement, repair and maintenance
                <br />
                professionals to take care of all your home service needs.
              </Typography>
            </Stack>
          </Typography>
          <Typography sx={{ color: "white",fontWeight:"bold" }} variant="h6" component="h6">
            Need Help?
            <Stack>
              <Typography sx={{ fontSize: 14, color: "secondary.main" }}>
                Contact Us
              </Typography>
              <Typography sx={{ fontSize: 14, color: "secondary.main" }}>
                About Us
              </Typography>
              <Typography sx={{ fontSize: 14, color: "secondary.main" }}>
                Careers
              </Typography>
              <Typography sx={{ fontSize: 14, color: "secondary.main" }}>
                Terms of Use
              </Typography>
              <Typography sx={{ fontSize: 14, color: "secondary.main" }}>
                Privacy Policy
              </Typography>
              <Typography sx={{ fontSize: 14, color: "secondary.main" }}>
                Refund Policy
              </Typography>
            </Stack>
          </Typography>
          <Typography sx={{ color: "white",fontWeight:"bold" }} variant="h6" component="h6">
            Learn More
            <Stack>
              <Typography sx={{ fontSize: 14, color: "secondary.main" }}>
                Designs
              </Typography>
              <Typography sx={{ fontSize: 14, color: "secondary.main" }}>
                Reviews
              </Typography>
              <Typography sx={{ fontSize: 14, color: "secondary.main" }}>
                Blogs
              </Typography>
              <Typography sx={{ fontSize: 14, color: "secondary.main" }}>
                Articles
              </Typography>
              <Typography sx={{ fontSize: 14, color: "secondary.main" }}>
                Professionals
              </Typography>
            </Stack>
          </Typography>
        </Stack>
        <Divider variant="middle" />
        <Stack
          sx={{ display: "flex", justifyContent: "space-around", padding: 1 }}
          direction={matches ? "row" : "column"}
          spacing={2}
        >
          <Stack>
            <Typography sx={{ fontSize: 14, color: "secondary.main" }}>
              © 2023 PRO MATCH . All rights reserved .
            </Typography>
          </Stack>
        </Stack>
      </AppBar>
    </>
  );
};
