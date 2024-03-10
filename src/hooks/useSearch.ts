import { useEffect, useMemo, useState } from 'react';
import { RootFolder } from '../clients/localStorageClient';
import { useCollapsedFoldersContext } from '../contexts/collapsedFolders';
import { search } from '../helpers/search';
import { getAllFolderIds } from '../helpers/getAllFolderIds';

export const useSearch = (data: RootFolder) => {
  const { collapseMany } = useCollapsedFoldersContext();

  const [searchParam, setSearchParam] = useState<string>('');

  const updateSearchParam = (searchParam: string) => {
    setSearchParam(searchParam);
  };

  const dataToDisplay = useMemo(() => {
    return search(data, searchParam);
  }, [searchParam, data]);

  useEffect(() => {
    if (searchParam !== '') {
      collapseMany(getAllFolderIds(dataToDisplay));
    }
  }, [searchParam, collapseMany, dataToDisplay]);

  return { dataToDisplay, updateSearchParam };
};
