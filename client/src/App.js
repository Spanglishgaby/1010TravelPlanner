
import React, { useEffect} from 'react';
import Home from "./components/home/Home"
import './App.css';
import { Switch, Route} from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';


function App() {

  // const [reviews, setReviews] = useState([])
  
  useEffect(() => {
    fetch('/reviews')
      .then(r => r.json())
      .then(data => console.log(data)) // setSunSign(signData))
  }, [])

  useEffect(() => {
    fetch('/users')
      .then(r => r.json())
      .then(data => console.log(data)) // setSunSign(signData))
  }, [])

  useEffect(() => {
    fetch('/activities')
      .then(r => r.json())
      .then(data => console.log(data)) // setSunSign(signData))
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
          <SignUp/>
        </Route>
      </Switch>
  );
}

export default App;
