import Home from "./components/Home"
import './App.css';
import { Switch, Route} from 'react-router-dom';

function App() {
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
