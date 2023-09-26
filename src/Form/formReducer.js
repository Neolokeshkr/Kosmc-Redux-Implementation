const  initialState = {}

const formReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SAVE_FORM':
            return {
                ...action.payload
            }
        default : return state
    }
}

export default formReducer;