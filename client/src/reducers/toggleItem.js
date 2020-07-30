const toggleItem = (state = [], action) => {
    if(action.type === 'TOGGLE_ITEM'){
        // console.log(state[action.payload.itemName].has)
        const newState = {
            ...state,
            [action.payload.itemName]: {
                ...state[action.payload.itemName],
                has: !state[action.payload.itemName].has
            }
        }
        return newState;
    }
    return state;
}

export default toggleItem