import React from 'react';
import { Item } from '../../types';
import './TableStyles.css';
import { Link } from 'react-router-dom';

interface TableProps {
  items: Item[];
  podcastId: string;
}

export const Table: React.FC<TableProps> = ({ items, podcastId }) => {
  const getFullDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };
  const composeUrl = (episodeId: string) => `/podcast/${podcastId}/episode/${episodeId}`;

  return (
    <div className="table-container">
      <table>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
        {items.map((cell) => {
          return (
            <tr>
              <td>
                <Link className="table-link" to={composeUrl(cell.id)}>
                  {cell.title}
                </Link>
              </td>

              <td>{getFullDate(cell.created)}</td>
              <td>{cell.itunes_duration}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
