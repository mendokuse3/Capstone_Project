
export const toggleItem = (content, itemName, ) => ({
    type: 'TOGGLE_ITEM',
    payload: {
        content,
        itemName
    }
})

export const toggleDungeon = (crystal, name) => ({
    type: 'TOGGLE_DUNGEON',
    payload: {
        crystal,
        name
    }
})

// export const incrementCounter = (content, itemName) => ({
//     type: 'INCREMENT_COUNTER',
//     payload: {
//         content,
//         itemName
//     }
// })