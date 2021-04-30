import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Userpass from './Pages/Login/Components/Userpass';
import Signup from './Pages/Signup/index';
import JobList from './Pages/JobList/JobList';
import JobDetails from './Pages/JobDetails/index';
import Resume from './Pages/Resume/index';
import Nav from './Components/Nav';
import Application from './Pages/Application/Application';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/userpass" component={Userpass} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={JobList} />
          <Route exact path="/jobdetails" component={JobDetails} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/apply" component={Application} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
