import { useState } from 'react';
import './App.css'
import Routes from './Routes';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [page, setPage] = useState<string>('');
  
  const handlePageClick = (pageName: string) => {
    setPage(pageName);
  };

  const pageSeted = page ? true : false;

  return (
    <>
      <ThemeProvider>
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
                  <a href="#" onClick={() => handlePageClick('refasprops')}>
                    Ref As Props
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handlePageClick('usetoloaddata')}>
                    Use - to load data
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handlePageClick('usetocontext')}>
                    Use - to context
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handlePageClick('useformstatus')}>
                    UseFormStatus
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handlePageClick('useformstate')}>
                    UseFormState
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handlePageClick('useoptimistic')}>
                  UseOptimistic
                  </a>
                </li>
              </ul>
          }
      </div>
      </ThemeProvider>
    </>
  )
}

export default App
