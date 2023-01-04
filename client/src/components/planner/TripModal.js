import * as React from 'react'
import '../../components/css/modal.css'
import { SaveButton } from './SaveButton'
import { Typography, Modal } from '@mui/material'
import TextField from '@mui/material/TextField';
// import dayjs from 'dayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const TripModal = ({
  openModal,
  handleCloseModel,
  trip,
  createTrips,
  UpdatingTrips,
}) => {
  const [title, setTitle] = React.useState(trip ? trip.title : '')
  const [description, setDescription] = React.useState(trip ? trip.description : '')
  const [date, setDate] = React.useState(trip ? trip.date : '')
  const [total_budget, setBudget] = React.useState(trip ? trip.total_budget : '')

  React.useEffect(() => {
    setTitle(trip ? trip.title : '')
    setDescription(trip ? trip.description : '')
    setDate(trip ? trip.date : '')
    setBudget(trip ? trip.total_budget : '')
  }, [trip])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (trip) {
      const updatedtrip = { ...trip, title: title, description: description, date:date, total_budget:total_budget }
      UpdatingTrips(updatedtrip)
    } else {
      const newtrip = { title: title, description: description, date: date, total_budget: total_budget }
      createTrips(newtrip)
      setTitle('')
      setDescription('')
      setDate('')
      setBudget('')
    }

    handleCloseModel()
  }

  return (
    <Modal
      className='modal'
      open={openModal}
      onClose={handleCloseModel}
      aria-labelledby='modal-edit-trip'
      aria-describedby='modal-edit-trip-name-color'>
      <div
        className='modal-body edit-modal b-radius'
        style={{ background: 'white' }}
        >
        <Typography
          id='modal-modal-title'
          variant='h5'
          component='h3'
          gutterBottom>
          Trip Details
        </Typography>

        <form
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit}
          className='form details-form'>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            label='Title'
            variant='outlined'
            color='secondary'
            fullWidth
          />
          <TextField
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            label='Description'
            variant='outlined'
            color='secondary'
            fullWidth
          />
          <TextField
            onChange={(e) => setDate(e.target.value)}
            value={date}
            label='Date'
            variant='outlined'
            color='secondary'
            fullWidth
          />
          <TextField
            onChange={(e) => setBudget(e.target.value)}
            value={total_budget}
            label='Total_budget'
            variant='outlined'
            color='secondary'
            fullWidth
          />
          <SaveButton title={trip ? 'Save trip' : 'Create trip'} />
        </form>
      </div>
    </Modal>
  )
}

export default TripModal
