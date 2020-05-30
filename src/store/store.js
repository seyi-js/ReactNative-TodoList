import {createStore} from 'redux';

import rootReducer from '../reducers/';

const initialState = {};

// store
let store = createStore(rootReducer, initialState);

export default store;
