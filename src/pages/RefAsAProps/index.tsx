import ParentComponent from './components/ParentComponent';

export default function RefAsProps() {

  return (
    <>
      <div>
        <title>Ref as a Props</title>
        <meta name='description' content='Passing ref as props' />
      </div>
      <div>
        <h1>Ref As A Props</h1>
        <ParentComponent />
      </div>
    </>
  )
}