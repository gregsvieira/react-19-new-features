import { useState } from 'react';

interface IUsers {
  name: string;
  email: string;
}

export default function UserForm() {
  const [users, setUsers] = useState<IUsers[]>([]);

  async function handleAddUser(formData: FormData): Promise<void>{
    const name = formData.get('name')
    const email = formData.get('email')
    console.log('enviou form', {name, email});

    setUsers((prev) => [...prev, { name, email } as IUsers])
  }

  function handleCleanUsers(): void{
    setUsers([])
    console.log('limpou form');
  }

  return (
    <>
      <div>
        <form action={handleAddUser}>
          <div>
            <input type='text' name='name' placeholder='Type the name'/>
          </div>
          <div>
            <input type='email' name='email' placeholder='Type the e-mail'/>
          </div>
          <div>
            <div>
              <button type='submit'>Send</button>
              <button type='reset'>Clear</button>
            </div>
          </div>

        </form>
        <h2>Users</h2>
          <button type='button' onClick={handleCleanUsers}>Clear List</button>
          <div>
          </div>
        <ul>
          {users.map((user: IUsers, index: number) => (
            <li key={index}> {user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

// On form we don't need more use prevent default, manipulating states, onSubmit, onChange...
// More simple