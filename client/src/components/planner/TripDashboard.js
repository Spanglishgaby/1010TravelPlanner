import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DropdownMenu from './DropdownMenu'
import {
  Typography,Grid,Tooltip,IconButton,Box,Container} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import TripModal from './TripModal';


const TripDashboard = ({match,history,updatingTrips,deleteTrips}) => {
//   //handle trips
  const [trip, setTrip] = useState([])
  const {id} = useParams();

  useEffect(() => {
    getTrips()
  }, [id])
  
  const getTrips = () => {
      fetch(`/trips/${id}`)
        .then((res) => res.json())
        .then((data) => 
        // console.log(data)
        setTrip(data)
        )
  }



  const handleChange = (changedtrip) => {
    setTrip(changedtrip)
    updatingTrips(changedtrip)
  }

  const handleDelete = (deletetrip) => {
    deleteTrips(deletetrip)
    history.push('/trips')
  }

  //get colors for trip
  //const currentColorScheme = tripColors(trip)

  //trip menu to see more options
  const [moreAnchorEl, setMoreAnchorEl] = useState(null)
  const isMenuOpen = Boolean(moreAnchorEl)
  const handleMenuOpen = (event) => {
    setMoreAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setMoreAnchorEl(null)
  }

  //trip edit modal
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModel = () => setOpenModal(true)
  const handleCloseModel = () => setOpenModal(false)

  return (
    <>
          <Container maxWidth='xl' sx={{ height: '80vh', overflow: 'scroll' }}>
            <Grid
              item
              container
              alignContent='center'
              justifyContent='space-between'
              sx={{ pb: 6 }}>
              <Box className='flex'>
                <Typography variant='h3' component='h2'>
                  {trip.title}
                </Typography>
              </Box>
              <Box className='flex'>
                <Tooltip title='trip Options'>
                  <IconButton
                    aria-label='show options'
                    aria-controls='trip-options'
                    aria-haspopup='true'
                    onClick={handleMenuOpen}>
                    <MoreVertIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              <DropdownMenu
                moreAnchorEl={moreAnchorEl}
                isMenuOpen={isMenuOpen}
                handleMenuClose={handleMenuClose}
                handleOpenModel={handleOpenModel}
                handleDelete={handleDelete}
                component={trip}
                componentType='trip'
              />

              <TripModal
                trip={trip}
                openModal={openModal}
                handleCloseModel={handleCloseModel}
                handleUpdatingtrip={handleChange}
                
              />
            </Grid>

          
          </Container>
    
      
        
      
    </>
  )
}

export default TripDashboard
