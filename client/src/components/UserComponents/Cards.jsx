import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CleaningImage from "../../images/cleaningMan.jpg";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

export const Cards = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const services = [
    {
      title: "Title 1",
      description: "Description 1",
    },
    {
      title: "Title 2",
      description: "Description 2",
    },
    {
      title: "Title 3",
      description: "Description 3",
    },
    {
      title: "Title 3",
      description: "Description 3",
    },
  ];

  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        mt={!matches ? 10 : 0}
        sx={{ fontWeight: "bold", padding: 2, color: "white" }}
      >
        Popular Services
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {services.map((service, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <Item sx={{ backgroundColor: "#161b22" }}>
              <Stack
                sx={{
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                  borderRadius: "10px",
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height: 200,
                    borderRadius: 1,
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    objectFit: "scale-down",
                  }}
                  image={CleaningImage}
                  title={"service 1"}
                />
                <CardContent>
                  <Typography
                    sx={{ color: "white" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {service.title}
                  </Typography>
                  <Typography sx={{ color: "white" }} variant="body2">
                    {service.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button sx={{ fontWeight: "bold" }} size="large">
                    Book Service
                  </Button>
                  <Button size="large">View</Button>
                </CardActions>
              </Stack>
            </Item>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
