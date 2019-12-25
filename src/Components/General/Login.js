import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <form className='ui form'>
          <h1 className='ui dividing header'>Login</h1>
          <div className='field'>
            <label>Username</label>
            <input type='text' />
          </div>
          <div className='field'>
            <label>Password</label>
            <input type='password' />
          </div>
          <div>
            <button className='ui primary button'>Login</button>
          </div>
        </form>
        <div>
          <Link to='/Owner'>Owner Dashboard</Link>
        </div>
      </div>
    );
  }
}

export default Login;
