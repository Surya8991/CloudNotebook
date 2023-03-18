import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'
import AddNotes from '../components/AddNote'


function Notes(props) {
  let context = useContext(noteContext)
  const { notes } = context
  return (
    <>
      <AddNotes />
      <div className='container my-3'>
        <h2 className='text-center'>Your Notes</h2>
        <div className="row my-3">
          <h2>You Notes</h2>
          {notes.map((note) => {
            return <Noteitem key={note._id} note={note} />
          })}
        </div>
      </div>
    </>
  )
}

export default Notes