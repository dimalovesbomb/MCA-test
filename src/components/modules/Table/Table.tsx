import React, { ReactElement } from 'react';
import { Item } from '../../../types';
import { Link } from 'react-router-dom';

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

  const renderThTd = (variant: 'th' | 'td', node: ReactElement | string | number) => {
    return variant === 'th' ? (
      <th className="p-2 border-b border-b-solid border-b-primary-black text-lg text-left">{node}</th>
    ) : (
      <td className="p-2 border-b border-b-solid border-b-primary-black text-sm">{node}</td>
    );
  };

  return (
    <div className="rounded mt-8 p-4 h-screen overflow-y-scroll shadow">
      {!items.length ? (
        <span>...loading (or error)</span>
      ) : (
        <table className="border-collapse w-full">
          <thead>
            <tr>{['Title', 'Date', 'Duration'].map((text) => renderThTd('th', text))}</tr>
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
