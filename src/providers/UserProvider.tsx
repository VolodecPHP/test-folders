import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { UserRole } from '../clients/localStorageClient';

export type UserType = 'default_user' | 'admin_user';

interface User {
  name: string;
  role: UserRole;
}

const users: Record<UserType, User> = {
  default_user: {
    name: 'default user',
    role: 'user',
  },
  admin_user: {
    name: 'admin user',
    role: 'admin',
  },
} as const;

interface ContextValue {
  userRole: UserRole;
  updateUserRole: (role: UserType) => void;
}

const initialContextValue: ContextValue = {
  userRole: 'user',
  updateUserRole: () => {},
};
const UserContext = createContext(initialContextValue);

const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>(users.default_user);

  const updateUser = useCallback((userType: UserType) => {
    setUser(users[userType]);
  }, []);

  const contextValue = useMemo(() => {
    return { userRole: user.role, updateUserRole: updateUser };
  }, [user, updateUser]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
