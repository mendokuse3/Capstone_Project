import { connect } from 'react-redux';
import { toggleItem, toggleDungeon } from '../actions/actions';

import Items from '../components/Items';


const mapStateToProps = state => {
    // console.log(state)
    return state.toggleItem
}

const mapDispatchToProps = {
    toggleItem,
    toggleDungeon
}


export default connect(
    mapStateToProps,
    // null,
    mapDispatchToProps
)(Items)