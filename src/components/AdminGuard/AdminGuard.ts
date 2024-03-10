import { PropsWithChildren } from 'react';
import { UserRole } from '../../clients/localStorageClient';

interface Props extends PropsWithChildren {
  fileProtectionLevel: UserRole;
  userRole: UserRole;
}

export const AdminGuard: React.FC<Props> = ({
  children,
  fileProtectionLevel,
  userRole,
}) => {
  if (fileProtectionLevel === 'admin' && userRole !== 'admin') {
    return null;
  }

  return children;
};
