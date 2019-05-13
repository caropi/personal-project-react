import React from 'react';
import { connect } from 'react-redux';
import { setLoggedIn } from '../store/actions.js';


const UserInput = (props) => {
  return (
      <> 
        <label htmlFor="userName">
          Enter Github User Name
        </label>
        <input 
          type="text" 
          name="userName" 
          value={props.value} 
          onChange={(e) => props.onChange(e)} 
          placeholder="Your Github user name here" />
        <button onClick={() => {props.setLoggedIn(); props.onClick(props.userInputValue)}} className="input__button">Login</button>
      </>
  )
}
const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
})

const mapDispatchToProps = {
  setLoggedIn
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);