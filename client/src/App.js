import React, { useState,useEffect} from 'react';
import { Switch, Route} from 'react-router-dom';
import theme from './theme';

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'


import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import Home from "./components/home/Home"


import TripDashboard from './components/planner/TripDashboard'
import Planner from './components/planner/Planner';


function App() {
  const appliedTheme = createTheme(theme)
  // const [activities, setActivities] = useState([])
  // useEffect(() => {
  //   fetch('/activities')
  //     .then(r => r.json())
  //     .then(activitiesData => setActivities(activitiesData)) 
  // }, [])

  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('/users')
      .then(r => r.json())
      .then(usersdata => setUsers(usersdata)) // setSunSign(signData))
  }, [])

  //get Trips
const [trips, setTrips] = useState([])
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

const createTrips = (trip) => {
  fetch('/trips', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(trip),
  })
    .then((res) => res.json())
    .then((data) => {
      setTrips((prevTrips) => {
        return [...prevTrips, data]
      })
    })
}

const updateTrips = (trip) => {
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
}

const updatingTrips = (changedTrip) => {
  updateTrips(changedTrip)
  const updatedTrips = trips.map((trip) =>
    trip.id === changedTrip.id ? changedTrip : trip
  )
  setTrips(updatedTrips)
}

const deleteTrips = (deleteTrip) => {
  const updatedTrips = trips.filter(
    (trip) => trip.id !== deleteTrip.id
  )
  fetch(`/trips/${deleteTrip.id}`, {
    method: 'DELETE',
  })
  setTrips(updatedTrips)
}

 //handle search
 const [search, setSearch] = useState('')
 const filterTrips = trips.filter((trip) => {
   return trip.title.toLowerCase().includes(search.toLowerCase())
 })

  return (
    <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <Switch>
        <Route exact path = '/'>
            <Home/>
          </Route>
          <Route exact path = '/signin'>
            <SignIn/>
          </Route>
          <Route exact path = '/signup'>
            <SignUp users ={users} setUsers={setUsers}/>
          </Route>
          {/* <Route exact path = '/users'/>
             
          <Route/> */}
          <Route exact path='/planner' >
            <Planner
                    trips={filterTrips}
                    search={search}
                    setSearch={setSearch}
                    // getTrips={getTrips}
                    updateTrips={updateTrips}
                    createTrips={createTrips}
                    updatingTrips={updatingTrips}
                    deleteTrips={deleteTrips}
                  />
          </Route>
          <Route exact path='/planner/:id'>
            <TripDashboard
                  trips={trips}
                  // search={search}
                  // setSearch={setSearch}
                  //getTrips={getTrips}
                  updatingTrips={updatingTrips}
                  deleteTrips={deleteTrips}
                  />
          </Route>
          
        </Switch>
    </ThemeProvider>
  );
}

export default App;
