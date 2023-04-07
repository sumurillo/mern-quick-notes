import * as notesAPI from './notes-api';


export async function createNote(noteData) {
    // const token = await usersAPI.signUp(userData);
    // localStorage.setItem('token', token);
    // return getUser();
    const newNote = await notesAPI.createNoteRequest(noteData)
    return newNote
  }