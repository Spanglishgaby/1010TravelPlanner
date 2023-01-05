import { useState } from 'react' 
import '../../components/css/modal.css'
//import { SaveButton } from './SaveButton'
import { Typography, Modal } from '@mui/material'
//import TextField from '@mui/material/TextField';
import { Button, Form } from 'semantic-ui-react'
// import dayjs from 'dayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const TripModalCreate = ({openModal,handleCloseModel,addTrips }) => {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    total_budget: '',
  })


    const [errors, setErrors] = useState([])
    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
    }
    function onSubmit(e){
      e.preventDefault()
      
      fetch('/trips',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({...formData, ongoing:true})
      })
      .then(res => {
        if(res.ok){
          res.json().then(addTrips)
        } else {
          //Display errors
          res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
      })
      handleCloseModel()
    }

    
  // const [title, setTitle] = useState('')
  // const [description, setDescription] = useState('')
  // const [date, setDate] = useState('')
  // const [total_budget, setBudget] = useState('')

  // const newtrip = { 
  //   title: title, 
  //   description: description, 
  //   date: date, 
  //   total_budget: total_budget 
  // }
  // console.log(newtrip)
  // const handleSubmit = (event) => {
  //   event.preventDefault()

  //     fetch('/trips', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           //accept: 'application/json',
  //         },
  //         body: JSON.stringify(newtrip),
  //     })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setTrips((prevTrips) => [data,...prevTrips])
  //         })
          
  //   handleCloseModel()
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

        <Form onSubmit={onSubmit}>
          <Form.Field>
            <label>Title</label>
            <input type='text' name='title' value={formData.title} onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input type='text' name='description' value={formData.description} onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <input type='text' name='date' value={formData.date} onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Budget</label>
            <input type='text' name='budget' value={formData.total_budget} onChange={handleChange}/>
          </Form.Field>
          
          <Button type='submit'>Create a new trip</Button>
        </Form>
        {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
      </div>
    </Modal>
  )
}

export default TripModalCreate
