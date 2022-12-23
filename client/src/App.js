
import React, { useEffect, useState} from 'react';
import Home from "./components/Home"
import './App.css';
import theme from './style/theme'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Switch, Route} from 'react-router-dom';


function App() {
  const appliedTheme = createTheme(theme)
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
  <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Switch>
        <Route exact path = '/'>
          <Home/>
        </Route>
        <Route exact path = '/main'>
          <h1>gfdgdgf</h1>
        </Route>
      </Switch>
  </ThemeProvider>
  );
}

export default App;
