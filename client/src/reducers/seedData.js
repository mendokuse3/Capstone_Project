import stateData from '../app/stateData'

const seedData = (state = [], action) => {
    if(action.type === 'SEED'){
        return stateData
    }
    return 'afdasdfasdfasdf'
}

export default seedData;