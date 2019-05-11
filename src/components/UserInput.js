import React from 'react';

const UserInput = (props) => { 
  return (
    <>
        <label htmlFor="userName">Enter Github User Name:
        </label>
      <input 
        type="text" 
        name="userName" 
        value={props.value} 
        onChange={(e) => props.onChange(e)} 
        placeholder="Your Github user name here" />
      <button onClick={() => {props.onSubmit(); props.onClick(props.userInputValue)}} className="input__button">Login</button>
    </>
  )
}
export default UserInput;