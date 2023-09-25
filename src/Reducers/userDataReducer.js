const initialState = {};

const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_DATA':
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}

export default userDataReducer;