import { configureStore } from '@reduxjs/toolkit';
import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import comments from '../reducers/test';

export default configureStore({
  reducer: {
    counter: comments,
  },
});
