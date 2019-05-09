import React from 'react';
import './App.css';
import Login from './components/Login.js';
import Headband from './components/Headband.js';
// I could have setLoggedIn function that takes in a value in setstate 
// + setUserInfo and setUserInputValue in the function 
// login component would be responsible for calling out to login endpoint to see if user is logged in 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      userInfo: [],
      error: ''
    }
  }
  setLoggedIn = (loggedIn = true) => {
    this.setState({loggedIn})
  }

  setErrorMessage = (err) => {
    this.setState({error: err})
  }
  render() {
    return (
      <div className="App">
        <Headband/>
        <main>
          <Login isLoggedIn={this.state.loggedIn} onLogin={this.setLoggedIn} error={this.state.error} setErrorMsg={this.setErrorMessage}/>
        </main>
      </div>
    )
  }
}

export default App;
