import { Button, IconButton, Popover, Typography } from "@mui/material";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import { useEffect, useState } from "react";

export function LocationForm(props) {
  const [currentLocation, setCurrentLocation] = useState("");

  const handleFetchLocation = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const { latitude, longitude } = position.coords;
      const geoApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
      const response = await fetch(geoApi);
      const output = await response.json();
      setCurrentLocation(output.city);
      props.onDataUpdate(output.city);
    } catch (error) {
      console.error("Error getting current position:", error);
      alert(
        "Error getting current position. Please enable location services and try again."
      );
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  useEffect(() => {
    handleFetchLocation();
  }, []);

  return (
    <>
      <IconButton onClick={handleClick} color="secondary">
        <FmdGoodRoundedIcon />
        <Typography>{currentLocation}</Typography>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{ width: "65vw" }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2, overflow: "hidden" }}>
          {currentLocation} will serve as your usual location.It is possible to
          modify it in your profile.
        </Typography>
      </Popover>
    </>
  );
}
