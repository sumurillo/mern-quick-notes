import { set } from "mongoose";
import { useState } from "react";
import * as notesService from '../../utilities/notes-service';


export default function NewNotePage() {
  const [note, setNote] = useState('');

  function handleChange(evt) {
    setNote(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    notesService.createNote(note); 
    setNote('');
  }
  
  return (
    <>
    <h1>NewNotePage</h1>
    <form action="">
      <label htmlFor="note">Text:
        <input type="text" name="note" id="text" onChange={handleChange} />
      </label>
      <input type="submit" value="Add Note" />
    </form>
    </>
  );
}