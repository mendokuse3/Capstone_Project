import React, { useState, useEffect } from 'react';
import Form from './NoteForm'

export const Notes = () => {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:3000/notes')
        .then(response => response.json())
        .then(data => {
            setState(data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    }, [])

    return(
        <div>
            {
                loading ? <div>Loading...</div> : (state.map( (note, index) => {
                    return (
                        <div key={index}>
                            {note.item_name} is at {note.description}
                        </div>
                    )
                }))
            }
            <Form state={state} updateNotes={setState}/>
        </div>
    )
}