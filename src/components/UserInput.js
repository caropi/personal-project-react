import React, { Component } from 'react'
// import Button from './Button.js';
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
      console.log(res)
      // const githubRes = res;
    })
    .catch(err => {
      this.props.setErrorMsg(err.message) 
    })
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
      <button onClick={() => {this.props.onSubmit(); this.logUser(this.state.userInputValue)}} value="Click meee" className="input__button">Click</button>
    </React.Fragment>
  )

  }
}
export default UserInput;