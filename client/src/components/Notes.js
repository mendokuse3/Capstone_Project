import React, { Component } from 'react';

export default class Notes extends Component {

    componentDidMount(){
        console.log('this is from the note component')
        this.getData();
    }
      getData = () => {
        fetch('http://localhost:3000/notes')
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render(){
        return(
            <div>notes</div>
        )
    }
}