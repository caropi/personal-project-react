// input will live here
import React, { Component } from 'react'
import UserInput from "./UserInput.js"
class Login extends Component {
    render () {
        return (
            <div className="login">
            <h3>Log Into your Github Account</h3>
            <div className="input">
                <UserInput/>
            </div>
            </div>
        )
    }
}

export default Login;