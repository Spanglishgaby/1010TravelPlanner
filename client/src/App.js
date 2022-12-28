
import React, { useState,useEffect} from 'react';
import Home from "./components/home/Home"
import './App.css';
import { Switch, Route} from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Reviews from './components/reviews/Reviews';
import Planner from './components/planner/Planner';
import UsersContainer from './components/user/UsersContainer';
import Trip from './components/trip/Trip';


function App() {

  const [reviews, setReviews] = useState([])
  const [users, setUsers] = useState([])
  const [activities, setActivities] = useState([])
  
  useEffect(() => {
    fetch('/reviews')
      .then(r => r.json())
      .then(data =>
        setReviews(data) 
        )
  }, [])
  // console.log(reviews)
  useEffect(() => {
    fetch('/users')
      .then(r => r.json())
      .then(usersdata => setUsers(usersdata)) // setSunSign(signData))
  }, [])

  useEffect(() => {
    fetch('/activities')
      .then(r => r.json())
      .then(activitiesData => setActivities(activitiesData)) // setSunSign(signData))
  }, [])




  return (
      <Switch>
        <Route exact path = '/'>
          <Home/>
        </Route>
        <Route exact path = '/signin'>
          <SignIn/>
        </Route>
        <Route exact path = '/signup'>
          <SignUp setUsers={setUsers}/>
        </Route>
        <Route exact path = '/planner'>
          <Planner/>
        </Route>
        <Route exact path = '/users'>
          <UsersContainer users={users} setUsers={setUsers}/>
        </Route>
        <Route exact path = '/reviews'>
          <Reviews reviews={reviews}/>
        </Route>
        <Route exact path = '/activities'>
          <Reviews activities={activities}/>
        </Route>
        <Route exact path = '/trip'>
          <Trip />
        </Route>
      </Switch>
  );
}

export default App;
