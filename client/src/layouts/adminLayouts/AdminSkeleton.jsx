import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import Logo from "../../images/logo.png";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 240;

export const AdminSkeleton = (props) => {
  console.log(props.props.type.name);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("");

  const navigate = useNavigate();
  const adminToken = localStorage.getItem("adminToken");
  console.log(adminToken);
  useEffect(() => {
    if (!adminToken) {
      navigate("/admin/signin");
    }
  }, [adminToken, navigate]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleLogoutAdmin = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/signin");
  };

  const drawer = (
    <Box>
      <Toolbar sx={{ backgroundColor: "black" }}>
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
              backgroundColor: "black",
            }}
            src={Logo}
          />
        </Avatar>
        <Typography variant="h5" sx={{ color: "white" }}>
          Dashmin
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={{ backgroundColor: "black" }}>
        {[
          { text: "Dashboard", href: "/admin/home" },
          { text: "Users", href: "/admin/users" },
          { text: "Experts", href: "/admin/experts" },
          { text: "Drafts", href: "/admin/drafts" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.href}
              sx={{
                color: "white",
                backgroundColor:
                  activeItem === item.text ? "primary.main" : "initial",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
              onClick={() => setActiveItem(item.text)}
            >
              <ListItemIcon sx={{ color: "white" }}>
                {item.text === "Dashboard" ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ marginTop: 3 }} variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
          <LogoutRoundedIcon
            onClick={handleLogoutAdmin}
            sx={{
              color: "white",
              "&:hover": { color: "red" },
              "&:active": { color: "black" },
            }}
          />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          backgroundColor: "black",
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "650px",
        }}
      >
        <Toolbar />
        {props.props}
      </Box>
    </Box>
  );
};
