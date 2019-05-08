import React, { Component } from 'react'
import Button from './Button.js';
// import App from '../App.js';
// in render function is where I'd pass in props
class UserInput extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      userInputValue: ""
    }
  }
  logUser(props) {
    fetch(`https://api.github.com/users/${this.state.UserInputValue}/events`)
    .then(res => res.json())
    .then(res => {
      const githubRes = res;
      this.setState({
        userInfo: githubRes,
        loggedIn: true
      });
    })
    .catch(err => {throw(err)})
  }

  // connect these through state
  handleChange(e) {
    this.setState({userInputValue: e.target.value});
  }
  
  render(props) {
  return (
    <React.Fragment>
        <label htmlFor="userName">Enter Github User Name:
        </label>
      <input type="text" name="userName" value={this.state.userInputValue} onChange={(e) => this.handleChange(e)} placeholder="Your Github user name here" />
      <Button onClick={() => {console.log('testing');this.props.onSubmit()}} value="Click meee" className="input__button"/>
    </React.Fragment>
  )

  }
}
export default UserInput;