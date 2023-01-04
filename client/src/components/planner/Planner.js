import { useState } from "react";
import TripCard from "./TripCard";
import TripModal from "./TripModal";

import {
  styled,
  createTheme,
  ThemeProvider,
  alpha,
} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
//import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  Typography,
  Grid,
  IconButton,
  Tooltip,
  Box,
  Container,
  Toolbar,
  Paper,
  Divider,
  List,
  CssBaseline,
  Skeleton,
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { mainListItems, secondaryListItems } from "./List";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import "../../components/css/index.css";
//Search Styling
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
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

const handleLogOut = () => {
  fetch("/user", {
    method: "DELETE",
  });
};

const mdTheme = createTheme();

const Planner = ({
  trips,
  createTrips,
  UpdatingTrips,
  deleteTrips
}) => {
  //handle edit Trip modal
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModel = () => setOpenModal(true);
  const handleCloseModel = () => setOpenModal(false);
  // Open and close side bar
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  console.log(trips)
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* TopNarbar */}
        <AppBar position="absolute" open={open}>
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
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton color="inherit">
              {/* <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                </Badge> */}
            </IconButton>
            <Avatar sx={{ bgcolor: "#f77062" }}>IJ </Avatar>
            <Typography
              component="h6"
              variant="h6"
              className="letter-spacing"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Isaac
            </Typography>
            <button onClick={handleLogOut}>Log Out</button>
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
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: "#F5EFE6",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {/* <Grid container spacing={3}>
              <Box
                component="main"
                sx={{
                  height: "100vh",
                  width: { xs: "100%", sm: "100%" },
                  ml: { sm: "10px" },
                  overflow: "auto",
                }}
              >
                <Toolbar />
                <Container maxWidth="xl" sx={{ flexGrow: 1, p: 3 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid
                          container
                          alignContent="center"
                          justifyContent="space-between"
                        >
                          <Typography variant="h2" gutterBottom>
                            Your Trips
                          </Typography>
                          <Box className="flex">
                            <Tooltip title="Create New Trip">
                              <IconButton
                                size="large"
                                aria-label="create Trip"
                                color="inherit"
                                onClick={handleOpenModel}
                              >
                                <ControlPointIcon fontSize="large" />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </Grid>
                          <Grid container spacing={2} >
                              { trips.map((trip) => (
                                  <TripCard
                                    trip={trip}
                                    key={trip.id}
                                    UpdatingTrips={UpdatingTrips}
                                    deleteTrips={deleteTrips}
                                  />
                                ))
                              }
                              
                              <TripModal
                                trip={trips}
                                openModal={openModal}
                                handleCloseModel={handleCloseModel}
                                createTrips={createTrips}
                              />
                          </Grid>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Grid> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Planner;
