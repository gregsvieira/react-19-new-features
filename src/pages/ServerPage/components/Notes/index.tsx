import { Suspense } from 'react';
import NotesItems from './NotesItems';

export interface INotes {
  id: number;
  content: string;
  author_id: number;
}

const Notes = () => {
  return (
    <Suspense fallback="Loading...">
      <NotesItems />
    </Suspense>
  )
}

export default Notes;