import Actions from './pages/Actions';
import RefAsProps from './pages/RefAsProps';
import UseToLoadData from './pages/UseToLoadData';
import UseToContext from './pages/UseToContext';
import UseFormStatus from './pages/UseFormStatus';
import UseFormState from './pages/UseFormState';
import UseOptimistic from './pages/UseOptimistic';

interface pageList {
  [key: string]: JSX.Element;
}

export const pageList: pageList = {
  'actions': <Actions />,
  'refasprops' : <RefAsProps />,
  'usetoloaddata': <UseToLoadData />,
  'usetocontext': <UseToContext />,
  'useformstatus': <UseFormStatus />,
  'useformstate': <UseFormState />,
  'useoptimistic': <UseOptimistic />,
};

export default function Routes({ page }: { page: string }) {

  const renderPage = () => {
      return pageList[page] || <div>Page not found</div>
    }
    

  return (
    <div>
      {renderPage()}
    </div>
  );
}

// manual routes because React Canary/19 doesn't have routing yet
