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
          <button type='submit'>Send</button>
        </form>
        <h3>Users</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}> {user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    </>
  )
}