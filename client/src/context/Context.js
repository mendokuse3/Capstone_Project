import React from 'react';
import stateData from '../stateData';

const TrackerContext = React.createContext({
    stateData,
    handleTrackerContext: () => {

    }
});

export default TrackerContext;