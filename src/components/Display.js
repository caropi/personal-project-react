import React, { Component } from 'react'
import UserInput from "./UserInput.js"
import Profile from "./Profile.js"
class Display extends Component {
      constructor(props) {
          super(props);
          this.state = {
              userInputValue: "",
              userInfo: []
          }
      }

      logUser = (props) => {
          fetch(`https://api.github.com/users/${this.state.userInputValue}/events`)
              .then(res => res.json())
              .then(res => {
                  const githubRes = res;
                  this.setState({
                    userInfo: githubRes
                  })
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
        const { userInfo, userInputValue } = this.state
        return (
            <>            
                <div className="login">
                    <h3>Log Into your Github Account</h3>
                    {this.props.isLoggedIn && "you're logged in"}
                    <div className="input">
                        <UserInput 
                            onSubmit={this.props.onLogin} 
                            error={this.props.error} 
                            value={userInputValue}
                            onChange={this.handleChange}
                            onClick = {this.logUser}
                        />
                    </div>
                </div>
                <div className="display__user">
                {userInfo.length > 0 && 
                    <Profile userData={userInfo}/>         
                }
                </div>
            </>
        )
    }
}

export default Display;