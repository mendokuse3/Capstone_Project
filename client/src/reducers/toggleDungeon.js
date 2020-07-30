const toggleDungeon = (state = [], action) => {
    if(action.type === 'TOGGLE_DUNGEON'){
        console.log(action.payload)
    }
    return state;
}

export default toggleDungeon