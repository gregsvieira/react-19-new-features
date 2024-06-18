import Notes from "./components/Notes";

export default function ServerPage() {
  return (
    <>
      <div>
        <title>ServerPage</title>
        <meta name='description' content='Server components' />
      </div>
      <div>
        <h1>Server Components</h1>
        <p>Server Components can be executed once by build time or to each request as in this case</p>

        <Notes />
        
        <div>
          <a href='https://github.com/gregsvieira/react-19-new-features/blob/main/src/pages/ServerPage/components/Notes/NotesItems.tsx' target='_blank' rel='noopener noreferrer'>
            &lt;code /&gt;
          </a>
        </div>

        
      </div>
    </>
  )
}