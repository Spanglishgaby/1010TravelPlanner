import { useState } from "react";
import TripCard from "./TripCard";
import TripModal from "./TripModal";

import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

//import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  Typography,
  Grid,
  IconButton,
  Tooltip,
  Box,
  Container,
  Toolbar,
  CssBaseline,
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import "../../components/css/index.css";
import PlannerNav from "./PlannerNav";
import TripModalCreate from "./TripModalCreate";

const mdTheme = createTheme();

const Planner = ({
  user,
  trips,
  createTrips,
  updatingTrips,
  deleteTrips,
  addTrips
}) => {

  //handle edit Trip modal
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModel = () => setOpenModal(true);
  const handleCloseModel = () => setOpenModal(false);
 
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* TopNarbar */}
        <PlannerNav user ={user}/>
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
            <Grid container spacing={3}>
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
                    <Grid item xs={12} 
                      container
                      alignContent="center"
                      justifyContent="space-between">
                          <Typography variant="h2" gutterBottom>
                            Your Trips
                          </Typography>
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

                          <Grid container spacing={2} >
                              { trips.map((trip) => (
                                  <TripCard
                                    trip={trip}
                                    key={trip.id}
                                    updatingTrips={updatingTrips}
                                    deleteTrips={deleteTrips}
                                  />
                                ))
                              }
                              
                              <TripModalCreate
                                trip={null}
                                openModal={openModal}
                                handleCloseModel={handleCloseModel}
                                addTrips={addTrips}
                              />
                          </Grid>
                    </Grid>
                </Container>
              </Box>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Planner;
