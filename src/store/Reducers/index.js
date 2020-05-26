import Reducer1 from './reducer1'
import User_Reduser from './UserReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
 reducer1: Reducer1,
 user_reducer: User_Reduser
})

export default rootReducer