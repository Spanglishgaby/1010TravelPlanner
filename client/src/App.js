import Home from "./components/Home"
import './App.css';
import theme from './style/theme'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Switch, Route} from 'react-router-dom';

function App() {
  const appliedTheme = createTheme(theme)
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
