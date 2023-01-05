import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import theme from "./theme";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import Home from "./components/home/Home";

import Faq from "./components/FaqView";

//import Planner from "./components/planner/Planner";
import PlannerNav from "./components/planner/PlannerNav";

import CreateTrip from "./components/planner/CreateTrip";
import CreateActivities from "./components/planner/CreateActivities";

function App() {
  const appliedTheme = createTheme(theme);
  const [activities, setActivities] = useState([])
  // useEffect(() => {
  //   fetch('/activities')
  //     .then(r => r.json())
  //     .then(activitiesData => setActivities(activitiesData))
  // }, [])

  const [user, setUser] = useState(null); // set to null in case user comes back
  const [users, setUsers] = useState([]);
  const [trips, setTrips] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/authorized").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);

  const updateUser = (user) => setUser(user);

 
  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((usersdata) => setUsers(usersdata)); // setSunSign(signData))
  }, []);

  //get Trips
  // useEffect(() => {
  //   getTrips()
  // }, [])
  
  // const getTrips = () => {
  //     fetch('/trips')
  //       .then((res) => res.json())
  //       .then((data) => 
  //       // console.log(data)
  //       setTrips(data)
  //       )
  // }
  console.log(trips)
 
  // const createTrips = (trip) => {
  //   fetch("/trips", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       accept: "application/json",
  //     },
  //     body: JSON.stringify(trip),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTrips((prevTrips) => {
  //         return [...prevTrips, data];
  //       });
  //     });
  // };

  // const patchTrips = (trip) => {
  //   fetch(`/trips/${trip.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       title: trip.title,
  //       description: trip.description,
  //       date: trip.date,
  //       total_budget: trip.total_budget,
  //     }),
  //   });
  // };

  // const updatingTrips = (changedTrip) => {
  //   patchTrips(changedTrip);
  //   const updatedTrips = trips.map((trip) =>
  //     trip.id === changedTrip.id ? changedTrip : trip
  //   );
  //   setTrips(updatedTrips);
  // };

  // const deleteTrips = (deleteTrip) => {
  //   const updatedTrips = trips.filter((trip) => trip.id !== deleteTrip.id);
  //   fetch(`/trips/${deleteTrip.id}`, {
  //     method: "DELETE",
  //   });
  //   setTrips(updatedTrips);
  // };

  //handle search
  // const [search, setSearch] = useState("");
  // const filterTrips = trips.filter((trip) => {
  //   return trip.title.toLowerCase().includes(search.toLowerCase());
  // });

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      {/* {!user ? <SignIn error={"Please Login"} updateUser={updateUser}/> : // If user not logged in send to logging page else render all */}
        <Switch>
          <Route exact path="/">
            <Home 
            reviews={reviews}
            setReviews={setReviews}/>
          </Route>
          <Route exact path="/signin">
            <SignIn
            error={"Please Login"}
            user={user}
            updateUser={updateUser} 
            />
          </Route>
          <Route exact path="/signup">
            <SignUp users={users} setUsers={setUsers} />
          </Route>
          <Route exact path="/planner">
            <PlannerNav
              user={user}
              updateUser={updateUser} 
              trips={trips}
              setTrips={setTrips}
              reviews={reviews}
              setReviews={setReviews}
            />
          </Route>
          <Route exact path="/activities">
          <CreateActivities
            activities ={activities}
            setActivities={setActivities}
            users={users}
            trips={trips}
            />
          </Route>
          {/* <Route exact path="/activities">
          <CreateTrip
              user={user}
              updateUser={updateUser} 
              trips={trips}
              setTrips={setTrips}
            />
          </Route> */}
          <Route exact path="/faq">
            <Faq />
          </Route>
          {/* <Route exact path = '/reviews'>
              <Reviews reviews={reviews}/>
            </Route> */}
          {/* <Route exact path = '/activities'>
              <Reviews activities={activities}/>
            </Route> */}
          
        </Switch>
      {/* } */}
    </ThemeProvider>
  );
}

export default App;
