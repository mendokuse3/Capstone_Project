import { createContext } from 'react';
import stateData from '../stateData';

const TrackerContext = createContext({
    stateData,
    handleTrackerContext: () => {

    }
});

export default TrackerContext