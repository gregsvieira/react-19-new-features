import Actions from './pages/Actions';
import RefAsProps from './pages/RefAsProps';
import UseToLoadData from './pages/UseToLoadData';

export default function Routes({ page }: { page: string }) {

  const renderPage = () => {

    if (page === 'actions') {
      return <Actions />
    } else if (page === 'refProps') {
      return <RefAsProps />
    } else if (page === 'useToLoadData') {
      return <UseToLoadData />
    } else {
      return <div></div>;
    }
   
    }
    

  return (
    <div>
      {renderPage()}
    </div>
  );
}

// manual routes because React Canary/19 doesn't have routing yet
