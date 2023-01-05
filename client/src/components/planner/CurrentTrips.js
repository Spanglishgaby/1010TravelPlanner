import { useState, useEffect } from "react";
import TripCard from "./TripCard";
// import {
//   Typography,
//   Grid,
//   Container,
// } from "@mui/material";
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
import "../../components/css/index.css";
import { Container, Grid} from 'semantic-ui-react'
import ReviewCreate from "./ReviewCreate";
import CreateTrip from "./CreateTrip";
//import CreateActivities from "./CreateActivities";
// import { TextField } from "@mui/material";


const CurrentTrips = ({
  user,
  trips,
  setTrips,
  reviews,
  setReviews
}) => {

  // const [filtered, setFiltered] = useState([])

  // // console.log(customers)
  //  let handleDelete = (id) => {
  //      setFiltered(filtered.filter(trip => trip.id !== id)) // filtered...could this line be filtering nothong?
  //  }
  const handleDelete = (id) => setTrips(current => current.filter(p => p.id !== id)) 
  const handleUpdate = (updatedTrip) => setTrips(current => {
    return current.map(trip => {
     if(trip.id === updatedTrip.id){
       return updatedTrip
     } else {
       return trip
     }
    })
  })
  //  let handleUpdate = (index, newData) => {
  //    let tempArray = filtered
  //    tempArray[index]= newData
  //    tripArray = tempArray
  //    setFiltered([...tempArray])
  //    setTrips(tempArray)
     

   //}
  let tripArray = trips.map((trip) => <TripCard key={trip.id} 
                                                handleUpdate={handleUpdate} 
                                                handleDelete={handleDelete} 
                                                trip={trip} 
                                                setTrips={setTrips}/>)
  
  useEffect(() => {
    getTrips()
  }, [])
  
  const getTrips = () => {
      fetch('/trips')
        .then((res) => res.json())
        .then((data) => 
        //console.log(data)
        setTrips(data)
        )
  }
  console.log(tripArray)
  return (
    <div >
    <Container style={{ marginTop: "50px" }}>
        <h1 >Last Trips :</h1>
        <Grid columns={3} divided>
            <Grid.Row>
              
                {tripArray}

            </Grid.Row>
        </Grid>
      <CreateTrip 

              setTrips={setTrips}/>
       <ReviewCreate user={user} reviews={reviews}
              setReviews={setReviews}/>
    </Container>
    </div>
        
  );
};

export default CurrentTrips;
