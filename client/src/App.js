import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import RosRankings from "./views/RestOfSeasonRankings";
import "assets/css/App.css";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ros">Rest Of Season Rankings</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/ros">
              <RosRankings />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
export default App;
