
import React, { useState,useEffect} from 'react';
import Home from "./components/home/Home"
import './App.css';
import { Switch, Route} from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Reviews from './components/reviews/Reviews';


function App() {

  const [reviews, setReviews] = useState([])
  const [users, setUsers] = useState([])
  // const [activities, setActivities] = useState([])
  
  useEffect(() => {
    fetch('/reviews')
      .then(r => r.json())
      .then(data =>
        setReviews(data) 
     
        )
  }, [])
  console.log(reviews)
  // useEffect(() => {
  //   fetch('/users')
  //     .then(r => r.json())
  //     .then(users => setUsers(users)) // setSunSign(signData))
  // }, [])

  // useEffect(() => {
  //   fetch('/activities')
  //     .then(r => r.json())
  //     .then(activities => setActivities(activities)) // setSunSign(signData))
  // }, [])




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
        <Route exact path = '/trips'>
          <SignIn/>
        </Route>
        <Route exact path = '/activities'>
          <SignIn/>
        </Route>
        <Route exact path = '/reviews'>
          <Reviews/>
        </Route>
      </Switch>
  );
}

export default App;
