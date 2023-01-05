import React from 'react'
import {useState} from 'react'
import { Button, Form, Container, Message } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const CreateTrip = ( {setTrips}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [total_budget, setTotal_budget] = useState('')
   // const [id, setId] = useState('')

    const newTrips = {
        title: title,
        description: description,
        date: date,
        total_budget: total_budget,
      }
//  console.log(newOrders)

    function handleSubmit (e){
        e.preventDefault()
        fetch("/trips", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newTrips)
          })
          .then((r) => r.json())
          .then((data) => {
          setTrips((currentTrips)=>[...currentTrips,data])
          })
          //alert(`${orders.id}`)
    } 
    
  return (

    <Container>
    <Message>
        <Message.Header>Return to Current Trip</Message.Header>
        {/* <p> Please register your information before continuing ...</p> */}
        <Link to= '/planner'>
        <Button color="blue" >Return</Button>
        </Link>
    </Message>
   
  <Form>
    <Form.Field>
      <label>Title</label>
      <input placeholder='Title'  onChange={(e) => setTitle(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      <input placeholder='Description'  onChange={(e) => setDescription(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Date</label>
      <input placeholder='Date'  onChange={(e) => setDate(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Budget</label>
      <input placeholder='Budget'  onChange={(e) => setTotal_budget(e.target.value)}/>
    </Form.Field>
    
    <Button onClick={handleSubmit} type='submit'>Create Trip</Button>
  </Form>
  </Container>
)


}

export default CreateTrip