import React from 'react';
import './App.css';
import Login from './components/Login.js';
import Headband from './components/Headband.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      userInputValue: "",
      userInfo: []
    }
  }
  render() {
    return (
      <div className="App">
        <Headband/>
        <main>
          <Login/>
        </main>
      </div>
    )
  }
}

export default App;
