import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Pages/Login/index';
import Signup from './Pages/Signup/index';
import JobList from './Pages/JobList/index';
import JobDetails from './Pages/JobDetails/index';
import Resume from './Pages/Resume/Resume/index';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={JobList} />
          <Route exact path="/jobdetails" component={JobDetails} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
