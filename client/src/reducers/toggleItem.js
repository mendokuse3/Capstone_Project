
const toggleItem = (state = [], action) => {
    if(action.type === 'TOGGLE_ITEM'){
        // console.log(action.payload.content)
        console.log(state)

        // const newState = {
        //     ...state,
        //     [action.payload.content.itemName]: {
        //         ...state[action.payload.content.itemName],
        //         has: !state[action.payload.content.itemName].has
        //     }
        // }
        // console.log(newState)
        // return newState;
    }
    // else if (action.type === 'INCREMENT_COUNTER'){
        // const newState = Object.assign({}, {
        //     // ...state,
        //     [action.payload.itemName]: {
        //         ...state[action.payload.itemName],
        //         counter: state[action.payload.itemName].counter++
        //     }
        // })
        // console.log(newState)
        // return newState
    // }
    return state;
}

export default toggleItem