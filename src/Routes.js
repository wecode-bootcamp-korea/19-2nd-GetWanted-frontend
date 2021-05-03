import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Userpass from './Pages/Login/Components/Userpass';
import Signup from './Pages/Signup/Signup';
import JobList from './Pages/JobList/JobList';
import JobDetails from './Pages/JobDetails/index';
import Nav from './Components/Nav/Nav';
import Application from './Pages/Application/Application';
import ResumeStorage from './Pages/ResumeStorage/ResumeStorage';
import Resume from './Pages/Resume/Resume';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Nav />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/userpass" component={Userpass} />
            <Route exact path="/" component={JobList} />
            <Route exact path="/jobdetails" component={JobDetails} />
            <Route exact path="/apply" component={Application} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/resume/:id" component={Resume} />
            <Route exact path="/storage" component={ResumeStorage} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
