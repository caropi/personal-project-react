import React, { Component } from 'react'
import UserInput from "./UserInput.js"

class Login extends Component {
    render () {
        return (
            <div className="login">
            <h3>Log Into your Github Account</h3>
            {this.props.isLoggedIn && "you're logged in"}
            <div className="input">
                <UserInput onSubmit={this.props.onLogin} error={this.props.error} setErrorMsg={this.props.setErrorMessage}/>
            </div>
            </div>
        )
    }
}

export default Login;