import ActionState from "./components/ActionState";

export default function UseActionState() {

  return (
    <>
      <div>
        <title>UseActionState</title>
        <meta name='description' content='Update based on response of the user' />
      </div>
      <div>
        <h1>useActionState</h1>
        <p>Receives an action and an initial state. That's all encapsulates and allows us to use the initial state and action that when called returns the pending state.</p>

        <ActionState />

        <div>
          <a href='https://github.com/gregsvieira/react-19-new-features/blob/main/src/pages/UseActionState/components/ActionState.tsx' target='_blank' rel='noopener noreferrer'>
            &lt;code /&gt;
          </a>
        </div>
      </div>
    </>
  )
}