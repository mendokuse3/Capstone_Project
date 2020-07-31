import { connect } from 'react-redux';
import { toggleItem, toggleDungeon } from '../actions/actions';

import Items from '../components/Items';


const mapStateToProps = state => {
    const {toggleItem} = state
    // console.log(state)
    return toggleItem
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