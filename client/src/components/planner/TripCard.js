import * as React from 'react'
import DropdownMenu from './DropdownMenu'
import TripModal from './TripModal'
import { Link } from 'react-router-dom'

import {Card,CardContent,CardActionArea,Typography,IconButton,Grid,Tooltip} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'



const TripCard = ({trip,updatingTrips,deleteTrips}) => {

  //menu to see more options
  const [moreAnchorEl, setMoreAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(moreAnchorEl)

  const handleMenuOpen = (event) => {
    setMoreAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMoreAnchorEl(null)
  }


  //handle edit modal
  const [openModal, setOpenModal] = React.useState(false)
  const handleOpenModel = () => setOpenModal(true)
  const handleCloseModel = () => setOpenModal(false)

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card
        className='b-radius trip-card'
        style={{ background: '#F0DFC8' }}>
        <CardActionArea className='card-actions'>
          <Tooltip title='trip Options'>
            <IconButton
              style={{ color: '#444' }}
              aria-label='show options'
              aria-controls='trip-options'
              aria-haspopup='true'
              onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        </CardActionArea>
        <CardContent>
          <Link to={`/planner/${trip.id}`} className='link'>
            <Typography variant='h6' component='h6'>
              Title: {trip.title}
            </Typography>
            <Typography variant='h6' component='h6'>
             Description: {trip.description}
            </Typography>
            <Typography variant='h6' component='h6'>
             Date: {trip.Date}
            </Typography>
            <Typography variant='h6' component='h6'>
              Budget: {trip.total_budget}
            </Typography>
          </Link>
        </CardContent>
      </Card>

      {/* pop ups */}
      <DropdownMenu
        moreAnchorEl={moreAnchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        handleOpenModel={handleOpenModel}
        deleteTrips={deleteTrips}
        component={trip}
        componentType='trip'
      />

      <TripModal
        trip={trip}
        openModal={openModal}
        handleCloseModel={handleCloseModel}
        updatingTrips={updatingTrips}
      />
    </Grid>
  )
}

export default TripCard

