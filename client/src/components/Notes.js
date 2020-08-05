import React, { useState, useEffect } from 'react';
import Form from './NoteForm';
import Edit from './EditForm';
import '../css/Note.css';

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
        <div className='note-container'>
            { selectedNote ? <Edit reRenderNotes={getData} goBack={setSelectedNote} selectedNote={selectedNote} /> : 
               <div>
                <div className='card-container'>
                        {
                        loading ? <div>Loading...</div> : (state.map( (note, index) => {
                            return (
                                <div className='item-card' key={index} >
                                    <p>{note.item_name} is at {note.description}</p>
                                    <div className='note-buttons'>
                                        <button onClick={() => setSelectedNote(note)}>Edit</button>
                                        <button onClick={() => deleteNote(note._id, index)}>Delete</button>
                                    </div>
                                </div>
                            )
                        }))
                        }
                    </div>
                    <Form className='form' state={state} updateNotes={setState}/>
                </div>
            }
        </div>
    )
}