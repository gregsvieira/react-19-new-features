import FormStatus from "./components/FormStatus";

export default function UseFormStatus() {

  return (
    <>
      <div>
        <title>UseFormStatus</title>
        <meta name='description' content='Status when send a form' />
      </div>
      <div>
        <h1>UseFormStatus</h1>
        <p>We can use a status of a Form direclty on the children using useFormStatus. 
          Returns a pending, action, method and data.</p>

        <FormStatus />

        <div>
          <a href='https://github.com/gregsvieira/react-19-new-features/blob/main/src/pages/UseFormStatus/components/SubmitButton.tsx' target='_blank' rel='noopener noreferrer'>
            &lt;code /&gt;
          </a>
        </div>
      </div>
    </>
  )
}