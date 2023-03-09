import React, { useState } from "react";
import "./Navbar.css";
import {
  Typography,
  AppBar,
  Toolbar,
  Avatar,
  useMediaQuery,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  useTheme,
  Container,
} from "@mui/material";
import Logo from "../../images/logo.png";
import { Stack } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Logout, Settings, PersonAdd } from "@mui/icons-material";

export const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar
        className="navBarMain"
        component="div"
        position="fixed"
        sx={{
          bgcolor: "#161b22",
          height: "80px",
          marginBottom: 2,
          borderRadius: 2,
        }}
      >
        <Toolbar
          sx={{
            display: matches && "flex",
            justifyContent: !matches && "space-between",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              width: 70,
              height: 70,
              bgcolor: "primary.contrastText",
            }}
          >
            <img
              alt="logo"
              style={{
                width: "120px",
                height: "120px",
                backgroundColor: "#161b22",
              }}
              src={Logo}
            />
          </Avatar>
          {matches ? (
            <Container>
              <Stack
                spacing={{ xs: 0, sm: 2, md: 6, lg: 12 }}
                direction={"row"}
                sx={{
                  marginLeft: "250px",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": { color: "grey" },
                    textDecoration: "none",
                    color: "white",
                  }}
                  variant="body1"
                  component="a"
                  href="#text-buttons"
                >
                  Home
                </Typography>
                <Typography
                  sx={{
                    "&:hover": { color: "grey" },
                    textDecoration: "none",
                    color: "white",
                  }}
                  variant="body1"
                  component="a"
                  href="#text-buttons"
                >
                  Register As A Professional
                </Typography>
                <Typography
                  sx={{
                    "&:hover": { color: "grey" },
                    textDecoration: "none",
                    color: "white",
                  }}
                  variant="body1"
                  component="a"
                  href="#text-buttons"
                >
                  My Bookings
                </Typography>
                <Typography
                  sx={{
                    "&:hover": { color: "grey" },
                    textDecoration: "none",
                    color: "white",
                  }}
                  variant="body1"
                  component="a"
                  href="#text-buttons"
                >
                  Blog
                </Typography>
              </Stack>
            </Container>
          ) : (
            <Box>
              <Box>
                <IconButton onClick={() => setIsDrawerOpen(true)}>
                  <MenuIcon />
                </IconButton>
              </Box>
              <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={handleCloseDrawer}
                PaperProps={{ sx: { backgroundColor: "secondary.main" } }}
              >
                <List
                  sx={{
                    width: { xs: 210, sm: 250, md: 300, lg: 400, xl: 500 },
                  }}
                >
                  <ListItem button onClick={handleCloseDrawer}>
                    <HomeRoundedIcon sx={{ color: "info.dark", padding: 2 }} />
                    <ListItemText sx={{ color: "info.dark" }} primary="Home" />
                  </ListItem>
                  <ListItem button onClick={handleCloseDrawer}>
                    <ManageAccountsRoundedIcon
                      sx={{ color: "info.dark", padding: 2 }}
                    />
                    <ListItemText
                      sx={{ color: "info.dark" }}
                      primary="Register As A Professional"
                    />
                  </ListItem>
                  <ListItem button onClick={handleCloseDrawer}>
                    <MenuBookRoundedIcon
                      sx={{ color: "info.dark", padding: 2 }}
                    />
                    <ListItemText
                      sx={{ color: "info.dark" }}
                      primary="My Bookings"
                    />
                  </ListItem>
                  <ListItem button onClick={handleCloseDrawer}>
                    <RssFeedRoundedIcon
                      sx={{ color: "info.dark", padding: 2 }}
                    />
                    <ListItemText sx={{ color: "info.dark" }} primary="Blog" />
                  </ListItem>
                  <Divider variant="middle" />
                  <ListItem button onClick={handleCloseDrawer}>
                    <LogoutRoundedIcon
                      sx={{ color: "warning.main", padding: 2 }}
                    />
                    <ListItemText
                      sx={{ color: "warning.main" }}
                      primary="Logout"
                    />
                  </ListItem>
                </List>
              </Drawer>
            </Box>
          )}

          {matches && (
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  flexGrow: 0.8,
                  justifyContent: "flex-end",
                  mr: 1,
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Box sx={{ position: "relative", overflow: "visible" }}>
                <Menu
                  keepMounted
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      marginLeft: "-30px",

                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 19,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-60%) rotate(45deg)",
                        zIndex: 0,
                        marginRight: 10,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "-10px", vertical: "top" }}
                  anchorOrigin={{ horizontal: "-10px", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
