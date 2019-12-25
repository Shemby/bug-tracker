import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectCreate extends Component {
  render() {
    return (
      <div className='ui container'>
        <h1 className='ui dividing header'>Poject Create</h1>
        <form className='ui form'>
          <div className='field'>
            <label>Project Title</label>
            <input />
          </div>
          <div className='field'>
            <label>Project Description</label>
            <input />
          </div>
          <div className='four wide field'>
            <label>Project Status</label>
            <select className='ui fluid dropdown'>
              <option />
              <option>In Development</option>
              <option>Release</option>
              <option>Obsolete</option>
            </select>
          </div>
          <button className='ui primary button'>Submit</button>
        </form>
        <div>
          <Link to='/Owner'>Dashboard</Link>
        </div>
      </div>
    );
  }
}

export default ProjectCreate;
