import { MOCKED_DATA } from '../mockData';

export type UserRole = 'admin' | 'user';

export type FileSystemElementType = 'folder' | 'file';

export interface FileSystemElement {
  id: string;
  name: string;
  protectionLevel: UserRole;
  type: FileSystemElementType;
  path: string;
}

export interface Folder extends FileSystemElement {
  children: { [x: string]: File | Folder };
  type: 'folder';
}

export interface File extends FileSystemElement {
  extension: string;
  type: 'file';
}

export interface RootFolder extends Folder {
  id: '__root__';
  name: '__root__';
  protectionLevel: 'admin';
  path: '';
}

export const getRoot = (): RootFolder => {
  const dataFromStorage = localStorage.getItem('__root__');

  if (dataFromStorage) {
    return JSON.parse(dataFromStorage);
  }

  return MOCKED_DATA;
};

export const setRoot = (root: RootFolder) => {
  localStorage.setItem('__root__', JSON.stringify(root));
};

export const deleteFileSystemElement = (fullPath: string) => {
  const root = getRoot();

  const pathParts = fullPath.split('/').filter((part) => part !== '');

  let currentFolder = root;

  for (let i = 0; i < pathParts.length - 1; i++) {
    currentFolder = currentFolder.children[pathParts[i]] as RootFolder;
  }

  delete currentFolder.children[pathParts[pathParts.length - 1]];

  setRoot(root);
};
