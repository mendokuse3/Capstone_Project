
export const toggleItem = (content, itemName) => ({
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