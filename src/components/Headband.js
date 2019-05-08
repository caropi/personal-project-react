import React from 'react'
import Welcome from './Welcome.js';

const Headband = (props) => {
  return (
    <header className="App-header">
        <div className = "logo" >
            <img className="logo__image" src = "/assets/logo.png"
            alt = "Github Logo Octocat" />
            <h1> Github Diary </h1> 
        </div> 
        <Welcome/>
    </header>
  )
}

export default Headband
