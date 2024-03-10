import {
  Folder as FolderType,
  File as FileType,
} from '../../clients/localStorageClient';
import { File } from '../File/File';
import { Folder } from '../Folder/Folder';

interface Props {
  item: FolderType | FileType;
  handleDelete: (path: string) => void;
}

export const FileSystemElement: React.FC<Props> = ({ item, handleDelete }) => {
  return item.type === 'folder' ? (
    <Folder folder={item} handleDelete={handleDelete} />
  ) : (
    <File file={item} handleDelete={handleDelete} />
  );
};
