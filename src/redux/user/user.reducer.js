const INITIAL_SATTE = {
    currentUser: null
}

const userReducer = (state = INITIAL_SATTE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;