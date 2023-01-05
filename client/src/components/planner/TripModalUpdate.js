import { useState } from 'react' 
import '../../components/css/modal.css'
import { SaveButton } from './SaveButton'
import { Typography, Modal } from '@mui/material'
import TextField from '@mui/material/TextField';
// import dayjs from 'dayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const TripModalUpdate = ({openModal,handleCloseModel, trip, trips, setTrips}) => {
  const [title, setTitle] = useState(trip.title )
  const [description, setDescription] = useState(trip.description)
  const [date, setDate] = useState(trip.date )
  const [total_budget, setBudget] = useState(trip.total_budget)
 
  const handleSubmit = (event) => {
    event.preventDefault()
    
        fetch(`/trips/${trip.id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            },
            body: JSON.stringify({
                title: trip.title,
                description: trip.description,
                date:trip.date,
                total_budget:trip.total_budget,
            }),
        })
        
        
        const handleUpdateTrip=(changedTrip)=>{
          const updatedTrip = trips.map((trip) =>trip.id === changedTrip.id ? changedTrip : trip)
          setTrips(updatedTrip)
        }

    handleCloseModel()
  }

        // const handleChange = (changedtrip) => {
        //     setTrips(changedtrip)
        //     updatingTrips(changedtrip)
        // }
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
        <SaveButton title='Save trip' />
        </form>
    </div>
    </Modal>
  )
}

export default TripModalUpdate
