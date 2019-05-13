  export const setLoggedIn = () => ({
      type: 'SET_LOGGED_IN',
      loggedIn:  true
    })

  export const setLoggedOut = () => ({
      type: 'SET_LOGGED_OUT',
      loggedIn: false
    })

  export const setErrorMessage = (err) => ({
      type: 'SET_ERROR_MESSAGE',
      error: err
    })

  export const setUserData = (results) => ({
      type: 'POPULATE_EVENTS',
      userInfo: results
  })

  export const logUser = (userInputValue) => (dispatch) => {
    fetch(`https://api.github.com/users/${userInputValue}/events`)
      .then(res => res.json())
      .then(res => dispatch(setUserData(res)))
      .catch(err => {
        dispatch(setErrorMessage(err))
      })
  }
    
  export const handleChange = (e) => ({
    type: 'HANDLE_CHANGE',
    userInputValue: e.target.value
  })