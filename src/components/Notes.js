import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'
function Note(props) {
  let context=useContext(noteContext)
  const {notes,setNotes}=context
  return (
    <>
    <div className='row my-3'>
      {notes.map((note)=>{
       return <Noteitem note={note}/>
      })}
    </div>
    
    </>
  )
}

export default Note