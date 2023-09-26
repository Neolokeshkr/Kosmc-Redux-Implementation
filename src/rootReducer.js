import { combineReducers } from "redux";
import userDataReducer from './Reducers/userDataReducer'
import formReducer from "./Form/formReducer";

const rootReducer = combineReducers({
    userData: userDataReducer,
    formData: formReducer
})

export default rootReducer;