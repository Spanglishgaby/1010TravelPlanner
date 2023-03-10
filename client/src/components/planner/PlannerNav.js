import { useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AddIcon from '@mui/icons-material/Add';
import FlightIcon from '@mui/icons-material/Flight';
import { styled } from "@mui/material/styles";
import {
  Typography,
  IconButton,
  Toolbar,
  Divider,
  List,
  Box,
  Container,
  
} from "@mui/material";

import "../../components/css/index.css";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import CurrentTrips from "./CurrentTrips";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const mdTheme = createTheme();
// distance from the side bar
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));
const PlannerNav = ({
  user,
  trips,
  setTrips,
  reviews,
  setReviews,
  updateUser,
}) => {
  // Open and close side bar
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const history = useHistory();

  const handleLogOut = () => {
    fetch(`/logout/${user.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        updateUser(false);
        history.push("/");
        //redirect user to home
      }
    });
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}
        <AppBar position="absolute" open={open} >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Travel Planner
            </Typography>
            <Typography
              component="h6"
              variant="h6"
              className="letter-spacing"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Welcome {user.first_name}
            </Typography>
            <Button
              sx={{ margin: 2 }}
              onClick={handleLogOut}
              variant="contained"
              color="success"
              endIcon={<LogoutIcon />}
            >
              Log out
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItemButton href="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton href="/planner">
              <ListItemIcon>
                <FlightIcon />
              </ListItemIcon>
              <ListItemText primary="Current Trips" />
            </ListItemButton>
            <ListItemButton href="/activities">
              <ListItemIcon>
                <AddIcon  />
              </ListItemIcon>
              <ListItemText primary="Create a Activity" />
            </ListItemButton>
          </List>
        </Drawer>
        <Box component="main" sx={{width:  "100%"}}>
          <Toolbar />
          <Container sx={{
                  height: "100vh",
                  width:  "100%" }}>
              <Box
                component="main"
                sx={{
                  height: "100vh",
                  width:  "100%"
                }}
              >
                <Toolbar />
                <CurrentTrips
                  user={user}
                  trips={trips}
                  setTrips={setTrips}
                  reviews={reviews}
                  setReviews={setReviews}
                />
              </Box>
            
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PlannerNav;
