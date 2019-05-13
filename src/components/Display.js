import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInput from "./UserInput.js"
import Profile from "./Profile.js"
import UserEvents from "./UserEvents.js"
import { setLoggedOut, setErrorMessage } from '../store/actions.js';

class Display extends Component {
      constructor(props) {
          super(props);
          this.state = {
              userInputValue: "",
              userInfo: [],
          }
      }
      logUser = (props) => {
          fetch(`https://api.github.com/users/${this.state.userInputValue}/events?limit=1000`)
              .then(res => res.json())
              .then(res => {
                  const githubRes = res;
                  this.setState({
                    userInfo: githubRes
                  })
              })
              .catch(err => {
                  props.setErrorMessage(err)
              })
      }
      handleChange = (e) => {
          this.setState({
              userInputValue: e.target.value
          });
      }
    render (props) {
        const { userInfo, userInputValue } = this.state
        return (
            <div className="display">            
                <div className="display__login">
                    {(userInfo.length > 0 && this.props.loggedIn) && 
                    <div className="display__user">
                        <Profile userData={userInfo}/>         
                    </div>
                    }
                    {this.props.loggedIn ? 
                    <button className="input__button" onClick={() => {this.props.setLoggedOut()}}>Logout</button> :
                    <div className="display__login--container">
                        <h2>Log Into Github Account</h2>
                        <div className="display__login--input">
                            <UserInput 
                                isLoggedIn={this.props.isloggedIn} 
                                error={this.props.error} 
                                value={userInputValue}
                                onChange={this.handleChange}
                                onClick = {this.logUser}
                            />
                        </div>
                    </div>
                    }
                </div>
                {(userInfo.length > 0 && this.props.loggedIn) &&
                    <div className="display__results">
                            <UserEvents userData={userInfo}/>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn,
    error: state.error
})

const mapDispatchToProps = {
    setLoggedOut,
    setErrorMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
