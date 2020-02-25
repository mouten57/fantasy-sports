import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from './components/Home'
import RosRankings from './components/RestOfSeasonRankings'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };

  }


  render() {
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
         
        </Switch>
        </Container>
      </div>
    </Router>
    );
  }
}
export default App;
