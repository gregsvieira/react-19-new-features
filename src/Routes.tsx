import Actions from './pages/Actions';
import RefAsAProps from './pages/RefAsAProps';
import UseToLoadData from './pages/UseToLoadData';
import UseToContext from './pages/UseToContext';
import UseFormStatus from './pages/UseFormStatus';
import UseFormState from './pages/UseFormState';
import UseOptimistic from './pages/UseOptimistic';
import Metatags from './pages/Metatags';

interface pageList {
  [key: string]: JSX.Element;
}

export const pageList: pageList = {
  'Actions': <Actions />,
  'Ref as a props' : <RefAsAProps />,
  'Use to load data': <UseToLoadData />,
  'Use to context': <UseToContext />,
  'UseFormStatus': <UseFormStatus />,
  'UseFormState': <UseFormState />,
  'UseOptimistic': <UseOptimistic />,
  'Metatags': <Metatags />,
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
