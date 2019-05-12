import React from 'react';
import './App.css';
import Display from './components/Display.js';
import Headband from './components/Headband.js';
import { Provider } from 'react-redux';
import store from './store/store.js';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Headband/>
          <main>
            <Display 
            />
          </main>
        </div>
      </Provider>
    )
  }
}

export default App;
