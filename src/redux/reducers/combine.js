import { combineReducers } from "redux";
import todosReducer from './todos'

const reducers = {
    todosReducer,
}

const appReducers = combineReducers(reducers);

export default appReducers;