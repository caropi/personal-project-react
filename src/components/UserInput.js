import React from 'react';
import { connect } from 'react-redux';
import { setLoggedIn, handleChange, logUser } from '../store/actions.js';


const UserInput = (props) => {
  const onSubmit = () => {
    props.logUser(props.userInputValue)
  }
  return (
      <> 
        <label htmlFor="userName">
          Enter Github User Name
        </label>
        <input 
          type="text" 
          name="userName" 
          value={props.value} 
          onChange={(e) => props.handleChange(e)} 
          placeholder="Your Github user name here" />
        <button onClick={() => {props.setLoggedIn(); onSubmit()}} className="input__button">Login</button>
      </>
  )
}
const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  userInputValue: state.userInputValue
})

const mapDispatchToProps = {
  setLoggedIn,
  handleChange,
  logUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);