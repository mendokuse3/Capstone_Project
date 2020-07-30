import { combineReducers } from 'redux';

import toggleItem from './toggleItem';
import toggleDungeon from './toggleDungeon';

const rootReducer = combineReducers({toggleItem, toggleDungeon});

export default rootReducer;