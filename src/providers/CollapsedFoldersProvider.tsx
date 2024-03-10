import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

interface ContextValue {
  collapseFolder: (id: string) => void;
  collapseMany: (folders: string[]) => void;
  isCollapsed: (folderId: string) => boolean;
}

const initialContextValue: ContextValue = {
  collapseFolder: () => {},
  collapseMany: () => {},
  isCollapsed: () => false,
};

const CollapsedFoldersContext = createContext(initialContextValue);

const CollapsedFoldersProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [collapsedFolders, setCollapsedFolders] = useState<Array<string>>([]);

  const collapseFolder = useCallback(
    (id: string) => {
      if (collapsedFolders.includes(id)) {
        setCollapsedFolders((v) => v.filter((item) => item !== id));
      } else {
        setCollapsedFolders((v) => [...v, id]);
      }
    },
    [collapsedFolders]
  );

  const collapseMany = useCallback((folders: string[]) => {
    setCollapsedFolders(folders);
  }, []);

  const isCollapsed = useCallback(
    (folderId: string) => {
      return collapsedFolders.includes(folderId);
    },
    [collapsedFolders]
  );

  const contextValue = useMemo(() => {
    return { collapseFolder, collapseMany, isCollapsed };
  }, [collapseFolder, collapseMany, isCollapsed]);

  return (
    <CollapsedFoldersContext.Provider value={contextValue}>
      {children}
    </CollapsedFoldersContext.Provider>
  );
};

export { CollapsedFoldersContext, CollapsedFoldersProvider };
