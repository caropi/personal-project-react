import React, { Component } from 'react'
import Button from './Button.js';

class UserInput extends Component { 
  logUser(props) {
    fetch('https://api.github.com/users/caropi/events')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      const githubRes = res;
      this.setState({
        userInfo: githubRes,
        loggedIn: true
      });
    })
    .catch(err => {throw(err)})
  }
  handleClick(e) {
      e.preventDefault();
      // console log doesn't appear - is this because this is a synthetic event rendered by React-DOM?
    console.log('something happening here')
  }
  
  render(props) {
  return (
    <React.Fragment>
        <label htmlFor="userName">Enter Github User Name:
        </label>
      <input type="text" name="userName" placeholder="Your Github user name here" />
      <Button onClick={() => this.handleClick} value="Click meee" className="input__button"/>
    </React.Fragment>
  )

  }
}
export default UserInput;