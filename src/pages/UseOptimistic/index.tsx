import AppMessage from './components/AppMessage'

export default function UseOptimistic() {

  return (
    <>
      <div>
        <title>UseOptimistic</title>
        <meta name='description' content='UseOptimistic - Enhance the user response until the update arrives' />
      </div>
      <div>
        <h1> UseOptimistic </h1>
        <p>We can show something while the request is not ready.</p>
        <AppMessage />

        <div>
          <a href='https://github.com/gregsvieira/react-19-new-features/blob/main/src/pages/UseOptimistic/components/FormMessage.tsx' target='_blank' rel='noopener noreferrer'>
            &lt;code /&gt;
          </a>
        </div>
      </div>
    </>
  )
}