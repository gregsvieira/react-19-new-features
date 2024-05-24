import { INotes } from '.';
import db from '../../../../database';

const fetchNotes = async (): Promise<INotes[]> => {
  const { data, error } = await db.from('notes').select('*');
  if (!data || error){
    return [];
  }
  return data;
}

export default fetchNotes;