const toggleItem = (state = [], action) => {
    if(action.type === 'SAY_ITEM'){
        console.log(state)
    }
    return state;
}

export default toggleItem