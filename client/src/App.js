import React, {useState} from 'react';
import {Notes} from './components/Notes'
import Items from './components/Items'
import TrackerContext from './context/Context'



export default function App() {
 const [stateData, setStateData] = useState(TrackerContext._currentValue.stateData)
    // console.log(this.state.stateData)
  const handleTrackerContent = (item) => {
    // setStateData({
    //   ...stateData,
    //   [item]: {
    //     ...stateData[item],
    //     [key]: value
    //   }
    // })
    if(stateData[item].has === false){
      setStateData({
          ...stateData,
          [item]: {
            ...stateData[item],
            has: true
          }
        })
        return stateData[item].current[stateData[item].counter]
    } else {
      if(stateData[item].counter < stateData[item].current.length - 1){
        setStateData({
          ...stateData,
          [item]: {
            ...stateData[item],
            counter: stateData[item].counter += 1
          }
        })
        return stateData[item].current[stateData[item].counter]
      }
      else {
        setStateData({
          ...stateData,
          [item]: {
            ...stateData[item],
            counter: 0,
            has: false
          }
        })
      }
    }
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





