import { MdDelete } from 'react-icons/md';
import { File as FileType } from '../../clients/localStorageClient';
import { AdminGuard } from '../AdminGuard/AdminGuard';
import { FileIcon } from '../FileIcon/FileIcon';
import { useUserContext } from '../../contexts/user';

interface Props {
  file: FileType;
  handleDelete: (path: string) => void;
}

export const File = ({ file, handleDelete }: Props) => {
  const { userRole } = useUserContext();

  return (
    <div className='file'>
      <span className='file__extension'>
        <FileIcon extension={file.extension} />
      </span>
      <div className='file__name'>
        {file.name}.{file.extension}
      </div>
      <AdminGuard
        fileProtectionLevel={file.protectionLevel}
        userRole={userRole}
      >
        <MdDelete
          className='file__delete'
          onClick={() => handleDelete(file.path)}
        />
      </AdminGuard>
    </div>
  );
};
