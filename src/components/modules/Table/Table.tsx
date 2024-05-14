import React, { ReactElement } from 'react';
import { Item } from '../../../types';
import { Link } from 'react-router-dom';
import { cn } from '../../../helpers';

interface TableProps {
  items: Item[];
  podcastId: string;
}

export const Table: React.FC<TableProps> = ({ items, podcastId }) => {
  const composeUrl = (episodeId: string) => `/podcast/${podcastId}/episode/${btoa(episodeId)}`;
  const getFullDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  const renderThTd = (variant: 'th' | 'td', node: ReactElement | string | number, className?: string) => {
    return variant === 'th' ? (
      <th className={cn('p-2 border-b border-b-solid border-b-primary-black text-lg text-left', className)}>{node}</th>
    ) : (
      <td className={cn('p-2 border-b border-b-solid border-b-primary-black text-sm', className)}>{node}</td>
    );
  };

  return (
    <div className="rounded mt-8 p-4 pt-0 h-[500px] overflow-y-scroll shadow">
      {!items.length ? (
        <span>...loading</span>
      ) : (
        <table className="relative border-collapse w-full mt-4">
          <thead>
            <tr>
              {['Title', 'Date', 'Duration'].map((text) =>
                renderThTd('th', text, 'sticky top-0 bg-unset bg-secondary-white'),
              )}
            </tr>
          </thead>
          <tbody>
            {items.map((cell) => {
              return (
                <tr key={cell.created} className="even:bg-[#ebeef3]">
                  {renderThTd(
                    'td',
                    <Link className="no-underline text-primary-blue" to={composeUrl(cell.created.toString())}>
                      {cell.title}
                    </Link>,
                  )}
                  {renderThTd('td', getFullDate(cell.created))}
                  {renderThTd('td', cell.itunes_duration)}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
