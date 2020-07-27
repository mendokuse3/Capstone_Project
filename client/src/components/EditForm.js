import React, {Component} from 'react';

export default class Edit extends Component {
    state = {
        item_name: this.props.selectedNote.item_name,
        description: this.props.selectedNote.description,
        id: this.props.selectedNote._id
    }

    handleSubmit = (event, props) => {
        event.preventDefault();
        fetch(`http://localhost:3000/notes/${this.state.id}`, {
            body: JSON.stringify(this.state),
            method: "PUT",
            headers: {
              'Accept': "application/json, text/plain, */*",
              "Content-Type": "application/json",
            }
        }).then(response => response.json())
        .then(data => {
            this.props.reRenderNotes();
            this.props.goBack(undefined);
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="item_name">Item Name:</label>
                    <input id='item_name' value={this.state.item_name} onChange={this.handleChange}/>
                    <label htmlFor="description">Description:</label>
                    <input id='description' value={this.state.description} onChange={this.handleChange}/>
                    <input type='submit' />
                </form>
                <button onClick={() => this.props.goBack(undefined)}>Go Back</button>
            </div>
        )
    }
}