import React from 'react';
import { Item } from '../../../types';
import './TableStyles.css';
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

  return (
    <div className="table-container">
      {!items.length ? (
        <span>...loading (or error)</span>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {items.map((cell) => {
              return (
                <tr key={cell.created.toString()}>
                  <td>
                    <Link className="table-link" to={composeUrl(cell.created.toString())}>
                      {cell.title}
                    </Link>
                  </td>

                  <td>{getFullDate(cell.created)}</td>
                  <td>{cell.itunes_duration}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
