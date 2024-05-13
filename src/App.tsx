import { useState } from 'react';
import './App.css'
import Routes, { pageList } from './Routes';
import { ThemeProvider } from './context/ThemeContext';
import reactIcon from './assets/react-19-logo.png';

function App() {
  const [page, setPage] = useState<string>('');
  
  const handlePageClick = (pageName: string) => {
    setPage(pageName);
  };

  const pageSeted = page ? true : false;
  const pages = Object.keys(pageList);

  return (
    <>
      <ThemeProvider>
      <div>
        <title>Home</title>
        <meta name='description' content='Homepage' />
      </div>
        <img src={reactIcon} alt="React Logo" width="300 " height="235" className='logo' />
      <div>
          {
            pageSeted ?
            <Routes page={page} /> : 
            pages.map((pageName) => (
              <div key={pageName}>
                <button onClick={() => handlePageClick(pageName)} className='pageList'>
                  {pageName}
                </button>
              </div>
            ))
          }
      </div>
      </ThemeProvider>
    </>
  )
}

export default App
