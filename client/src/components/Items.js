import React, {Component} from 'react';
import { connect } from 'react-redux';
import { sayItem } from '../actions/actions';

class Items extends Component {

    handleSayItem = () => {
        this.props.sayItem('hello')
    }

    render(){
        return (
            <h1>hi</h1>
        )
    }
}

export default connect(
    null,
    {sayItem}
)(Items)

