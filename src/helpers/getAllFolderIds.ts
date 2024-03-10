import {
  RootFolder,
  Folder as FolderType,
} from '../clients/localStorageClient';

export const getAllFolderIds = (root: RootFolder) => {
  const folderIds: string[] = [];

  const traverse = (folder: FolderType) => {
    folderIds.push(folder.id);

    Object.values(folder.children).forEach((item) => {
      if (item.type === 'folder') {
        traverse(item);
      }
    });
  };

  traverse(root);

  return folderIds;
};
