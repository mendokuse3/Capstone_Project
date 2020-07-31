const toggleItem = (state = [], action) => {
    if(action.type === 'TOGGLE_ITEM'){
        // console.log(state)

        const newState = {
            ...state,
            [action.payload.itemName]: {
                ...state[action.payload.itemName],
                has: !state[action.payload.itemName].has
            }
        }
        // console.log(newState)
        return newState;
    }
    else if (action.type === 'INCREMENT_COUNTER'){
            console.log('hi')
    }
    return state;
}

export default toggleItem