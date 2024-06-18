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
        <p>Ref (focus) passed as prop to children</p>
        
        <ParentComponent />

        <div>
          <a href='https://github.com/gregsvieira/react-19-new-features/blob/main/src/pages/RefAsAProps/components/ParentComponent.tsx' target='_blank' rel='noopener noreferrer'>
            &lt;code /&gt;
          </a>
        </div>
      </div>
    </>
  )
}