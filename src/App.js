import React from 'react';
import './App.css';
import Login from './modules/Login.js';
import Headband from './modules/Headband.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      userName: ''
    }
  }
  render() {
    return (
      <div className="App">
        <Headband/>
        <body>
          <Login/>
        </body>
      </div>
    )
  }
}

export default App;
