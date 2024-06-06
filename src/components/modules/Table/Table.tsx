import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from '../../../types';
import { TableCell } from '../../TableCall';

const composeUrl = (podcastId: string, episodeId: string) => `/podcast/${podcastId}/episode/${btoa(episodeId)}`;
const getFullDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
};

interface TableProps {
  items: Item[];
  podcastId: string;
}

export const Table: React.FC<TableProps> = ({ items, podcastId }) => {
  return (
    <div className="rounded mt-8 p-4 pt-0 h-[50vh] desktop:h-[70vh] overflow-y-scroll shadow">
      {!items.length ? (
        <span>...loading</span>
      ) : (
        <table className="relative border-collapse w-full mt-4">
          <thead>
            <tr>
              {['Title', 'Date', 'Duration'].map((text) => (
                <TableCell key={text} variant="th" className="sticky top-0 bg-unset bg-secondary-white">
                  {text}
                </TableCell>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((cell) => {
              return (
                <tr key={cell.id} className="even:bg-[#ebeef3]">
                  <TableCell variant="td" className="text-sm">
                    <Link
                      className="no-underline text-primary-blue"
                      to={composeUrl(podcastId, cell.created.toString())}
                    >
                      {cell.title}
                    </Link>
                  </TableCell>
                  <TableCell variant="td" className="text-sm">
                    {getFullDate(cell.created)}
                  </TableCell>
                  <TableCell variant="td" className="text-sm">
                    {cell.itunes_duration}
                  </TableCell>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
