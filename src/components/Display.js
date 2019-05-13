import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInput from "./UserInput.js"
import Profile from "./Profile.js"
import UserEvents from "./UserEvents.js"
import { setLoggedOut, setErrorMessage } from '../store/actions.js';

class Display extends Component {
    render (props) {
        return (
            <div className="display">            
                <div className="display__login">
                    {(this.props.userInfo.length > 0 && this.props.loggedIn) && 
                    <div className="display__user">
                        <Profile userData={this.props.userInfo}/>         
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
                                value={this.props.userInputValue}
                                onChange={this.handleChange}
                                onClick = {this.logUser}
                            />
                        </div>
                    </div>
                    }
                </div>
                {(this.props.userInfo.length > 0 && this.props.loggedIn) &&
                    <div className="display__results">
                            <UserEvents userData={this.props.userInfo}/>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn,
    error: state.error,
    userInfo:state.userInfo
})

const mapDispatchToProps = {
    setLoggedOut,
    setErrorMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
