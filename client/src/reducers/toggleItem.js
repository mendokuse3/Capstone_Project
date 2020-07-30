const toggleItem = (state = [], action) => {
    if(action.type === 'TOGGLE_ITEM'){
        // console.log(state)
        const newState = {
            ...state,
            [action.payload.itemName]: !state[action.payload.itemName]
        }
        return newState;
    }
    return state;
}

export default toggleItem