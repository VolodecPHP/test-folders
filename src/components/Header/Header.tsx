import { useCollapsedFoldersContext } from '../../contexts/collapsedFolders';
import { useUserContext } from '../../contexts/user';
import { getAllFolderIds } from '../../helpers/getAllFolderIds';
import { RootFolder } from '../../clients/localStorageClient';
import { UserType } from '../../providers/UserProvider';

interface Props {
  data: RootFolder;
  updateSearchParam: (searchParam: string) => void;
  handleResetToMock: () => void;
}

export const Header: React.FC<Props> = ({
  data,
  updateSearchParam,
  handleResetToMock,
}) => {
  const { updateUserRole, userRole } = useUserContext();
  const { collapseMany } = useCollapsedFoldersContext();

  return (
    <div>
      <h3>Hey {userRole}!</h3>
      <div className='grid'>
        <button onClick={handleResetToMock}>Reset</button>
        <button onClick={() => collapseMany([])}>Uncollapse all</button>
        <button
          onClick={() => {
            collapseMany(getAllFolderIds(data));
          }}
        >
          Collapse all
        </button>
        <select
          onChange={(e) => {
            updateUserRole(e.target.value as UserType);
          }}
        >
          <option value='default_user'>Default user</option>
          <option value='admin_user'>Admin user</option>
        </select>
      </div>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => updateSearchParam(e.target.value)}
      />
    </div>
  );
};
