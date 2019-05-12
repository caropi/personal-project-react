const initialState = {
    loggedIn: false,
    error: ''
}

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'SET_LOGGED_IN': return { ...state, loggedIn: action.loggedIn };
            case 'SET_LOGGED_OUT': return { ...state, loggedIn: action.loggedIn };
            case 'SET_ERROR_MESSAGE': return{ ...state, error: action.error}
            default: return state;
        }

    }
export default reducer