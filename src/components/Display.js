import React, { Component } from 'react'
import UserInput from "./UserInput.js"

class Display extends Component {
      constructor(props) {
          super(props);
          this.state = {
              userInputValue: ""
          }
      }

      logUser = (props) => {
          fetch(`https://api.github.com/users/${this.state.userInputValue}/events`)
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
      handleChange = (e) => {
          this.setState({
              userInputValue: e.target.value
          });
      }
    render () {
        return (
            <div className="login">
            <h3>Log Into your Github Account</h3>
            {this.props.isLoggedIn && "you're logged in"}
            <div className="input">
                <UserInput 
                    onSubmit={this.props.onLogin} 
                    error={this.props.error} 
                    value={this.state.userInputValue}
                    onChange={this.handleChange}
                    onClick = {this.logUser}
                />
            </div>
            </div>
        )
    }
}

export default Display;