import { useState, useEffect } from "react";
import TripCard from "./TripCard";
import {
  Typography,
  Grid,
  Container,
} from "@mui/material";

import "../../components/css/index.css";




const CurrentTrips = ({
  user,
  trips,
  setTrips
}) => {

  const [filtered, setFiltered] = useState([])

  // console.log(customers)
   let handleDelete = (id) => {
       setFiltered(filtered.filter(trip => trip.id !== id))
   }
   let handleUpdate = (index, newData) => {
     let tempArray = filtered
     tempArray[index]= newData
     tripArray = tempArray
     setFiltered([...tempArray])
     setTrips(tempArray)
     

   }
  let tripArray = filtered.map((trip,i) => <TripCard key={trip.id} index={i} handleUpdate={handleUpdate} handleDelete={handleDelete} trip={trip} trips={trips} />)
  
  useEffect(() => {
    getTrips()
  }, [])
  
  const getTrips = () => {
      fetch('/trips')
        .then((res) => res.json())
        .then((data) => 
        // console.log(data)
        setTrips(data)
        )
  }
  
  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, p: 3 }}>
      <Grid item xs={12} 
        container
        alignContent="center"
        justifyContent="space-between">
            <Typography variant="h2" gutterBottom>
              Your Trips
            </Typography>
            <Grid container spacing={2} >
              {tripArray}
            </Grid>
      </Grid>
    </Container>
        
  );
};

export default CurrentTrips;
