'use server'

import db from '../../../../database';

interface IAuthor {
  id: number;
  name: string;
}

export async function Author({id} : {id: number}) {
  const { data } = await db.from('authors').select().eq('id', id).single();
  
  const author: IAuthor = data;
  
  return (
  <span>
    By: { author ? author.name : 'No author found'}
  </span>);
}