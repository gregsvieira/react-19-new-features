import { use } from 'react';
console.log(use);
console.log(typeof use);
import fetchNotes from './NotesServer';
import { INotes } from '.';

const NotesItems = () => {
  const notes = use(fetchNotes());

  return (
    <>
      <ul>
        {notes.map((note: INotes) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </>
  )
}

export default NotesItems;