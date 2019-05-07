import React from 'react'
import Button from './Button.js';

const UserInput = (props) => {
  return (
    <>
        <label htmlFor="">Github User Name:</label>
      <input type="text" />
      <Button/>
    </>
  )
}

export default UserInput;