import { useState } from 'react';
import './App.css'
import Routes from './Routes';

function App() {
  const [page, setPage] = useState<string>('');
  
  const handlePageClick = (pageName: string) => {
    setPage(pageName);
  };

  const pageSeted = page ? true : false;

  return (
    <>
      <div>
        <title>Home</title>
        <meta name='description' content='Homepage' />
      </div>
      <div>
          {
            pageSeted ?
            <Routes page={page} />
            :
              <ul>
                <li>
                  <a href="#" onClick={() => handlePageClick('actions')}>
                    Actions
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handlePageClick('refprops')}>
                    RefProps
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handlePageClick('use')}>
                    Use
                  </a>
                </li>
              </ul>
          }
      </div>
    </>
  )
}

export default App
