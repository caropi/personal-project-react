const initialState = {
    loggedIn: false,
    error: '',
    userInputValue: "",
    userInfo: [],
}

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'SET_LOGGED_IN': return { ...state, loggedIn: action.loggedIn };
            case 'SET_LOGGED_OUT': return { ...state, loggedIn: action.loggedIn };
            case 'SET_ERROR_MESSAGE': return{ ...state, error: action.error };
            case 'POPULATE_EVENTS': return{ ...state, userInfo: action.userInfo };
            case 'HANDLE_CHANGE': return{ ...state, userInputValue: action.userInputValue }
            default: return state;
        }

    }
export default reducer