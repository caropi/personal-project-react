import React from 'react';
import './App.css';
import Display from './components/Display.js';
import Headband from './components/Headband.js';
// login component would be responsible for calling out to login endpoint to see if user is logged in 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      error: ''
    }
  }
  setLoggedIn = (loggedIn = true) => {
    this.setState({loggedIn})
  }

  setLoggedOut = (loggedIn = false) => {
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
          <Display 
            onLogout={this.setLoggedOut}
            isLoggedIn={this.state.loggedIn} 
            onLogin={this.setLoggedIn} 
            error={this.state.error} 
            setErrorMsg={this.setErrorMessage}
          />
        </main>
      </div>
    )
  }
}

export default App;
