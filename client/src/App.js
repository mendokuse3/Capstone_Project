import React, {useState} from 'react';
import {Notes} from './components/Notes'
import Items from './components/Items'
import TrackerContext from './context/Context'



export default function App() {
 const [stateData, setStateData] = useState(TrackerContext._currentValue.stateData)
    // console.log(this.state.stateData)
  const handleTrackerContent = (item, key, value) => {
    setStateData({
      ...stateData,
      [item]: {
        ...stateData[item],
        [key]: value
      }
    })
  }
  return (
    <TrackerContext.Provider value={stateData} >
      <div className="App">
          <Items handleTrackerContent={handleTrackerContent}/>
          <Notes />
      </div>
    </TrackerContext.Provider>
  );
}





