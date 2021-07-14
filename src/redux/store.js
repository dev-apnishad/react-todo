import { createStore } from 'redux';
import appReducers from './reducers/combine';

const store = createStore(appReducers);

export default store;