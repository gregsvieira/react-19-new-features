import PostItems from "./components/PostItems";

export default function UseToLoadData() {

  return (
    <>
      <div>
        <title>Use to load data</title>
        <meta name='description' content='Use - using new hook to load data' />
      </div>
      <div>
        <h1> Use to load data </h1>
        <p>Now we can do a request with hook Use. use(fetch)</p>

        <PostItems />

        <div>
          <a href='https://github.com/gregsvieira/react-19-new-features/blob/main/src/pages/UseToLoadData/components/PostItems.tsx' target='_blank' rel='noopener noreferrer'>
            &lt;code /&gt;
          </a>
        </div>
      </div>
    </>
  )
}