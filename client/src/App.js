import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import Home from "./components/home/Home";
import Faq from "./components/FaqView";
import PlannerNav from "./components/planner/PlannerNav";
import CreateActivities from "./components/planner/CreateActivities";

function App() {
  const appliedTheme = createTheme(theme);
  const [activities, setActivities] = useState([]);

  const [user, setUser] = useState({}); // set to null in case user comes back
  const [users, setUsers] = useState([]);
  const [trips, setTrips] = useState([]);
  const [reviews, setReviews] = useState([]);

  const updateUser = (user) => setUser(user);

  useEffect(() => {
    fetch("/trips").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setTrips(user);
        });
      }
    });
  }, [user]);

  useEffect(() => {
    fetch("/authorized").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((usersData) => setUsers(usersData));
  }, []);

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <Home reviews={reviews} setReviews={setReviews} />
        </Route>
        <Route exact path="/signin">
          <SignIn error={"Please Login"} user={user} updateUser={updateUser} />
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
            activities={activities}
            setActivities={setActivities}
            user={user}
            trips={trips}
          />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
