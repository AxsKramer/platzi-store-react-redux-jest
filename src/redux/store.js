import {createStore} from 'redux';
import reducer from './reducers';
import initialState from '../initialState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

export default store;