import { useSearch } from './hooks/useSearch';
import { useAppData } from './hooks/useAppData';
import { Header } from './components/Header/Header';
import { TreeView } from './components/TreeView/TreeView';

function App() {
  const { data, handleDelete, handleResetToMock } = useAppData();
  const { dataToDisplay, updateSearchParam } = useSearch(data);

  return (
    <main className='container main'>
      <Header
        data={data}
        updateSearchParam={updateSearchParam}
        handleResetToMock={handleResetToMock}
      />
      <TreeView data={dataToDisplay} handleDelete={handleDelete} />
    </main>
  );
}

export default App;
