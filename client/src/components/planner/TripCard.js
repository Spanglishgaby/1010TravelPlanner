import { Button, Card,Grid } from 'semantic-ui-react'
import {useState} from 'react'
import TripUpdate from './TripUpdate'

const TripCard = ({trip,handleUpdate, handleDelete,setTrips}) => {

  const [wasClicked, setWasClicked]= useState(false)

  function handleclickDelete(e){
      // console.log(e.target.value)
      // console.log("delete")
      e.preventDefault()
      let id = parseInt(e.target.value)

      fetch(`trips/${trip.id}`, {
          method: "DELETE",
      })
      .then(() => {
         handleDelete(id)
      })
  }
  function handleclickUpdate(){
      setWasClicked(current => !current)
  }


  return (
    <Grid.Column>
    <br></br>
        <Card>
            <Card.Content>
            <Card.Header>Title: {trip.title}</Card.Header>
            <Card.Meta>
            Description:{trip.description}
            </Card.Meta>
            </Card.Content>
            <Card.Content extra>
            <div className='ui two buttons'>
                <Button value={trip.id} basic color='green'
                onClick={handleclickUpdate}>
                {wasClicked? "Hide Form" :"Edit"}
                </Button>
                <Button value={trip.id} basic color='red' 
                onClick={handleclickDelete}>
                Delete
                </Button>
            </div>
            </Card.Content>
        </Card>
        {wasClicked? <TripUpdate handleUpdate={handleUpdate}  setWasClicked={setWasClicked} setTrips={setTrips} trip={trip}/> : null}
    </Grid.Column>
  )
}

export default TripCard

