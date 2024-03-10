import { useState } from 'react';
import {
  RootFolder,
  deleteFileSystemElement,
  getRoot,
  setRoot,
} from '../clients/localStorageClient';
import { MOCKED_DATA } from '../mockData';

export const useAppData = () => {
  const [data, setData] = useState<RootFolder>(getRoot());

  const handleDelete = (path: string) => {
    deleteFileSystemElement(path);
    setData(getRoot);
  };

  const handleResetToMock = () => {
    setRoot(MOCKED_DATA);
    setData(MOCKED_DATA);
  };

  return {
    data,
    handleDelete,
    handleResetToMock,
  };
};
