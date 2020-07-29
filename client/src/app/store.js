import { configureStore } from '@reduxjs/toolkit';
// import { createStore, compse } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';

import comments from '../reducers/test';

const store = configureStore({
  reducer: {
    bob: comments
  }
});

console.log(store.getState())
export default store