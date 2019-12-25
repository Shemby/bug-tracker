import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OwnerDashboard extends Component {
  render() {
    return (
      <div ClassName='ui container'>
        <h1 className='ui center aligned header'>OwnerDashboard</h1>
        <Link to='/Dev'>Go to Dev Page</Link>
        <br />
        <Link to='/'>Log in Here</Link>
        <br />
        <Link to='/Create'>Create a Project</Link>
        <br />
        <Link to='/Edit'>Edit Projects</Link>
      </div>
    );
  }
}

export default OwnerDashboard;
