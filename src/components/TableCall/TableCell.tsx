import React, { PropsWithChildren } from 'react';
import { cn } from '../../helpers';

interface TableCellProps {
  variant: 'th' | 'td';
  className?: string;
}

export const TableCell: React.FC<PropsWithChildren<TableCellProps>> = ({ variant, className, children }) => {
  switch (variant) {
    case 'th':
      return (
        <th
          className={cn(
            'p-2 border-b border-b-solid border-b-primary-black text-md tablet:text-lg text-left',
            className,
          )}
        >
          {children}
        </th>
      );

    case 'td':
      return (
        <td
          className={cn(
            'p-2 border-b border-b-solid border-b-primary-black text-md tablet:text-lg text-left',
            className,
          )}
        >
          {children}
        </td>
      );

    default:
      return null;
  }
};
