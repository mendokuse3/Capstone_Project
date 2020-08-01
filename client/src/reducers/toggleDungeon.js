const toggleDungeon = (state = [], action) => {
    if(action.type === 'TOGGLE_DUNGEON'){
        console.log(state)
    }
    return state;
}

export default toggleDungeon