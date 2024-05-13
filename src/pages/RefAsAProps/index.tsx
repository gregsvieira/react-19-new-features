import ParentComponent from './components/ParentComponent';

export default function RefAsProps() {

  return (
    <>
      <div>
        <title>Ref as Props</title>
        <meta name='description' content='Passing ref as props' />
      </div>
      <div>
        <h1> 2 - RefProps</h1>
        <ParentComponent />
      </div>
    </>
  )
}