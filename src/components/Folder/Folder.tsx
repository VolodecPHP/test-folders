import { IoIosArrowDown } from 'react-icons/io';
import { CiFolderOn } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { Folder as FolderType } from '../../clients/localStorageClient';
import { useCollapsedFoldersContext } from '../../contexts/collapsedFolders';
import { AdminGuard } from '../AdminGuard/AdminGuard';
import { FileSystemElement } from '../FileSystemElement/FileSystemElement';
import { useUserContext } from '../../contexts/user';

interface Props {
  folder: FolderType;
  handleDelete: (path: string) => void;
}

export const Folder: React.FC<Props> = ({ folder, handleDelete }) => {
  const { collapseFolder, isCollapsed } = useCollapsedFoldersContext();
  const { userRole } = useUserContext();

  const hasChildren = Object.keys(folder.children).length > 0;
  const collapsed = isCollapsed(folder.id);

  return (
    <div className='folder'>
      <div className='folder__header'>
        {hasChildren ? (
          <IoIosArrowDown
            onClick={() => collapseFolder(folder.id)}
            className={`
						folder__icon-collapse 
						${collapsed ? 'folder__icon-collapse_collapsed' : ''}`}
          />
        ) : (
          <CiFolderOn className='folder__empty' />
        )}
        <div className='folder__name'>{folder.name}</div>
        <div className='folder__controls'>
          <AdminGuard
            fileProtectionLevel={folder.protectionLevel}
            userRole={userRole}
          >
            <MdDelete onClick={() => handleDelete(folder.path)} />
          </AdminGuard>
        </div>
      </div>

      {collapsed ? (
        <div className='folder__children'>
          {hasChildren
            ? Object.values(folder.children).map((item) => (
                <div className='row' key={item.id}>
                  <FileSystemElement item={item} handleDelete={handleDelete} />
                </div>
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
};
