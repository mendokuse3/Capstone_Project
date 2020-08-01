import { connect } from 'react-redux';
import { toggleItem, toggleDungeon } from '../actions/actions';

import Items from '../components/Items';

// import stateData from '../app/stateData';

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = {
    toggleItem,
    toggleDungeon,
}


export default connect(
    mapStateToProps,
    // null,
    mapDispatchToProps
)(Items)