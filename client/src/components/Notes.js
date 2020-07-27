import React, { useState, useEffect } from 'react';
import Form from './NoteForm';
import Edit from './EditForm';

export const Notes = () => {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedNote, setSelectedNote] = useState();
    const getData = () => {
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
    };
    const deleteNote = (id, index) => {
        fetch(`http://localhost:3000/notes/${id}`, {method: 'DELETE'})
        .then(() => {
            setState([
                    ...state.slice(0,index), ...state.slice(index +1)
            ])
        })
    }

    
    useEffect(() => {
        getData();
    }, [])

    return(
        <div>
            { selectedNote ? <Edit reRenderNotes={getData} goBack={setSelectedNote} selectedNote={selectedNote} /> : 
                <div>
                    {
                    loading ? <div>Loading...</div> : (state.map( (note, index) => {
                        return (
                            <div key={index} >
                                {note.item_name} is at {note.description}
                                <button onClick={() => setSelectedNote(note)}>Edit</button>
                                <button onClick={() => deleteNote(note._id, index)}>Delete</button>
                            </div>
                        )
                    }))
                    }
                    <Form state={state} updateNotes={setState}/>
                </div>
            }
        </div>
    )
}