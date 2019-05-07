import React from 'react'
import Welcome from './Welcome.js';

const Headband = (props) => {
  return (
    <header className="App-header">
                  <div className = "logo" >
                <img src = "/assets/logo.png"
            alt = "Github Logo (cat version)" />
                <h1> Github Diary </h1> 
            </div> 
            <Welcome/>
    </header>
  )
}

export default Headband
