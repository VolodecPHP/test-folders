import { useContext } from 'react';
import { CollapsedFoldersContext } from '../providers/CollapsedFoldersProvider';

export const useCollapsedFoldersContext = () => {
  return useContext(CollapsedFoldersContext);
};
