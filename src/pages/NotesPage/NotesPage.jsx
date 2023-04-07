import { checkToken } from "../../utilities/users-service";
import * as notesService from '../../utilities/notes-service';
import { useState, useEffect } from "react";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);

  useEffect(function() {
    async function getNotes() {
      const notes = await notesService.getAllNotes();
      setMenuItems(notes);
    }
    getNotes();
  }, []);


  async function handleCheckToken() {
    const expDate = await checkToken()
    console.log(expDate)
  }

  return (
    <>
      <h1>Notes Page</h1>
      <button onClick={ handleCheckToken } >Check When My Login Expires</button>

      { notes ?
        notes.map(note => <h3>{note.text}</h3>)
        :
      <h3>No Notes Yet!</h3>
      
      }
    </>
    
  );
}