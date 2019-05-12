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