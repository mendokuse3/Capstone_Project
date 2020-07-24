import React, { Component } from 'react';

export default class Note extends Component {

    componentDidMount(){
        this.getData();
    }
      getData = () => {
        fetch('http://localhost:3000/notes')
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render(){
        console.log('this is from the note component')
        return(
            <div>notes</div>
        )
    }
}