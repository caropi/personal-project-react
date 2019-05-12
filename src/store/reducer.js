
const initialState = {
    loggedIn: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "THISNEEDSTOBEUPPERCASE":
            break;
        case "ALSONEEDSTOBECAPS":
            break;
    }
    return state;
}

export default reducer