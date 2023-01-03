import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import FlightIcon from '@mui/icons-material/Flight';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
  };
  
  const number = {
    fontsize: 24,
    fontFamily: 'default',
    color: 'secondary.main',
    fontWeight: 'medium',
  };
  

const HowitWork = () => {
  return (
    <Box
        component="section"
        sx={{
           display: 'flex', 
        bgcolor: 'white', 
        overflow: 'hidden' 
        }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1628367282397-bf7cb7d6e4b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.3,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 4 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <AppRegistrationIcon fontsize = "large"/>
                <br></br>
                <br></br>
                <Typography variant="h5" align="center">
                  Register as new user
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <FlightIcon fontsize = "large"/>
                <br></br>
                <br></br>
                <Typography variant="h5" align="center">
                  Create New Trip
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <PersonAddIcon fontsize = "large"/>
                <br></br>
                <br></br>
                <Typography variant="h5" align="center">
                Add friends and family to your trip
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/signup/"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  )
}

export default HowitWork



