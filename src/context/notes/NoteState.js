import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const stateInitial=[
        {
          "_id": "64117b8acb712c9e7a55ce2e",
          "title": "1st note is Updated",
          "description": "1st Note indfsgfdddfgdfdfgfghtesrgdhftdrtdhrtetg",
          "tag": "Personal",
          "date": "2023-03-15T08:02:18.769Z",
          "__v": 0
        },
        {
          "_id": "64117bb1cb712c9e7a55ce36",
          "title": "Ramesh 1st Note",
          "description": "1st Note in DB dfsgfdddfgdfdfgfghtesrgdhftdrtdhrtetg",
          "tag": "Personal",
          "date": "2023-03-15T08:02:57.513Z",
          "__v": 0
        },
        {
          "_id": "641206dbcfcf15f200d54c69",
          "title": "Ramesh 13st Note",
          "description": "1st Note in DB dfsgfdddfgdfdfgfghtesrgdhftdrtdhrtetg",
          "tag": "Personal",
          "date": "2023-03-15T17:56:43.063Z",
          "__v": 0
        },
        {
          "_id": "641206e0cfcf15f200d54c6b",
          "title": "ddsdsds",
          "description": "1st Note in DB dfsgfdddfgdfdfgfghtesrgdhftdrtdhrtetg",
          "tag": "Personal",
          "date": "2023-03-15T17:56:48.941Z",
          "__v": 0
        },
        {
          "_id": "641206e6cfcf15f200d54c6d",
          "title": "fsfsaeshgdsfdbg",
          "description": "1st Note in DB dfsgfdddfgdfdfgfghtesrgdhftdrtdhrtetg",
          "tag": "Personal",
          "date": "2023-03-15T17:56:54.318Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(stateInitial)
    return (
        <NoteContext.Provider value={{notes,stateInitial}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;