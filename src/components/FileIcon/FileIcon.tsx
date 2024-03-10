import { FaFile } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa6';
import { TbFileTypeSvg } from 'react-icons/tb';

export const FileIcon: React.FC<{ extension: string }> = ({ extension }) => {
  switch (extension) {
    case 'pdf':
      return <FaFilePdf />;
    case 'svg':
      return <TbFileTypeSvg />;
    default:
      return <FaFile />;
  }
};
