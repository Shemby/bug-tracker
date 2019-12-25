import React, { Component } from 'react';
import SprintStatus from './SprintStatus';
import Burndown from './Burndown';
import { Link } from 'react-router-dom';

class Developer extends Component {
  render() {
    return (
      <div>
        <h1>Developer</h1>
        <div>
          <Burndown />
          <SprintStatus />
          <Link to='/Owner'>Go Back to Owner</Link>
          <br />
          <Link to='/Calendar'>Go to Calendar</Link>
        </div>
      </div>
    );
  }
}

export default Developer;
