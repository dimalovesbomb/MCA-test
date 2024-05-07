import React from 'react';
import { Link } from '../../types';

interface PodcastCardProps {
  image: {
    alt: string;
    src: string;
  };
  label: string;
  artist: string;
  summary: string;
  url?: string | Link;
}

export const PodcastCard: React.FC<PodcastCardProps> = ({ image, label, artist, summary, url }) => {
  const href = url && typeof url === 'object' ? url.attributes.href : url;

  return (
    <div className="w-[17rem] flex flex-col items-center bg-primary-white px-2 py-4 rounded shadow">
      {url ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <figure>
            <img className="rounded object-cover" alt={image.alt} src={image.src} />
          </figure>
        </a>
      ) : (
        <figure>
          <img className="rounded object-cover" alt={image.alt} src={image.src} />
        </figure>
      )}

      <div>
        {url ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            <p className="text-ellipsis overflow-hidden text-center text-primary-black uppercase mb-0">{label}</p>
          </a>
        ) : (
          <p className="text-ellipsis overflow-hidden text-center text-primary-black uppercase mb-0">{label}</p>
        )}
        <p className="italic text-ellipsis overflow-hidden text-center mb-0 text-primary-gray text-sm">By {artist}</p>
      </div>
      <div className="px-4 w-64">
        <p className="mt-4">Description:</p>
        <span className="text-sm italic break-words">{summary}</span>
      </div>
    </div>
  );
};
