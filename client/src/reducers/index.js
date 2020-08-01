import { combineReducers } from 'redux';

import toggleItem from './toggleItem';
import toggleDungeon from './toggleDungeon';
import seedData from './seedData';

// import stateData from '../app/stateData';

const rootReducer = combineReducers({toggleItem, toggleDungeon, seedData});

// const rootReducer = (state = "Initial Reducer State!", action) => {
//     switch (action.type) {
//         case 'SET_TEXT':
//             return "Ignore this case statement it won't run"
//         default:
//             return stateData;
//     }
// }

export default rootReducer;