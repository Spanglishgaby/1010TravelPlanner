
import React, { useEffect} from 'react';
import Home from "./components/Home"
import './App.css';
import { Switch, Route} from 'react-router-dom';


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
        <Route exact path = '/main'>
          <h1>gfdgdgf</h1>
        </Route>
      </Switch>
  );
}

export default App;
