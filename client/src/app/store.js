import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';

import rootReducer from '../reducers/index';

import stateData from './stateData';

const toggleItem = stateData

const defaultState = {
  toggleItem
}


// const store = createStore(rootReducer, defaultState);

const store = configureStore({
  reducer: rootReducer,
  preloadedState: defaultState
});

// console.log(store.getState())
export default store