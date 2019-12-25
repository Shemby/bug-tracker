import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import OwnerDashboard from './Owner/OwnerDashboard';
import Developer from './Development/Developer';
import Calendar from './Development/Calendar';
import Login from './General/Login';
import ProjectEdit from './Owner/ProjectEdit';
import ProjectCreate from './Owner/ProjectCreate';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/' exact component={Login} />
          <Route path='/Owner' component={OwnerDashboard} />
          <Route path='/Create' component={ProjectCreate} />
          <Route path='/Dev' component={Developer} />
          <Route path='/Calendar' component={Calendar} />
          <Route path='/Edit' component={ProjectEdit} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
