import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function createNoteRequest(noteData) {
    const newNote = { text: noteData }
  return sendRequest(BASE_URL, 'POST', newNote);
}