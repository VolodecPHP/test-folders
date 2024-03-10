import { RootFolder } from '../../clients/localStorageClient';
import { FileSystemElement } from '../FileSystemElement/FileSystemElement';

interface Props {
  data: RootFolder;
  handleDelete: (path: string) => void;
}

export const TreeView: React.FC<Props> = ({ data, handleDelete }) => {
  return (
    <div className='tree-view'>
      {Object.values(data.children).map((item) => (
        <div className='row' key={item.id}>
          <FileSystemElement item={item} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
};
