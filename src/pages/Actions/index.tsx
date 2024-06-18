import UserForm from './components/UserForm';


export default function Actions() {

  return (
    <>
      <div>
        <title>Actions</title>
        <meta name='description' content='Add new users' />
      </div>
      <div>
        <h1>Actions</h1>
        <p>Actions listen for events through a user action on a server layer of frontend</p>

        <UserForm />

        <div>
          <a href='https://github.com/gregsvieira/react-19-new-features/blob/main/src/pages/Actions/components/UserForm.tsx' target='_blank' rel='noopener noreferrer'>
            &lt;code /&gt;
          </a>
        </div>
      </div>
    </>
  )
}