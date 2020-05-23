import {combineReducers} from 'redux'
import CartReducer from './cart.reducer'

export default combineReducers({
    cart:CartReducer
})