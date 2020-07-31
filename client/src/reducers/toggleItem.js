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
        console.log(newState)
        return newState;
    }
    return state;
}

export default toggleItem