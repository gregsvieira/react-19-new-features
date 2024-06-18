'use server'

import Actions from './pages/Actions';
import RefAsAProps from './pages/RefAsAProps';
import UseToLoadData from './pages/UseToLoadData';
import UseToContext from './pages/UseToContext';
import UseFormStatus from './pages/UseFormStatus';
import UseActionState from './pages/UseActionState';
import UseOptimistic from './pages/UseOptimistic';
import Metatags from './pages/Metatags';
import ServerPage from './pages/ServerPage';

interface pageList {
  [key: string]: JSX.Element;
}

export const pageList: pageList = {
  'Actions': <Actions />,
  'Ref as a props' : <RefAsAProps />,
  'Use to load data': <UseToLoadData />,
  'Use to context': <UseToContext />,
  'UseFormStatus': <UseFormStatus />,
  'useActionState': <UseActionState />,
  'UseOptimistic': <UseOptimistic />,
  'Metatags': <Metatags />,
  'ServerPage': <ServerPage />,
};

export default function Routes({ page }: { page: string }) {

  const renderPage = () => {
      return pageList[page] || <div>Page not found</div>
    }
    

  return (
    <div>
      <div>
        <a href='/'>
        Home
        </a>
      </div>
      {renderPage()}
    </div>
  );
}

// manual routes because React Router to Canary/19 doesn't ready yet
