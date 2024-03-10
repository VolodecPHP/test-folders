import { File, Folder, RootFolder } from '../clients/localStorageClient';

export const search = (root: RootFolder, term: string): RootFolder => {
  const searchInFolder = (folder: Folder): Folder => {
    const filteredChildren: Record<string, Folder | File> = {};

    Object.keys(folder.children).forEach((childKey) => {
      const child = folder.children[childKey];

      if (child.name.toLowerCase().includes(term.toLowerCase())) {
        filteredChildren[childKey] = child;
      } else if (child.type === 'folder') {
        const nestedFolder = searchInFolder(child as Folder);

        if (Object.keys(nestedFolder.children).length > 0) {
          filteredChildren[childKey] = nestedFolder;
        }
      }
    });

    return { ...folder, children: filteredChildren };
  };

  return searchInFolder(root) as RootFolder;
};
