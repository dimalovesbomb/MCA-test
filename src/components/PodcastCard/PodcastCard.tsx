import React from 'react';
import './PodcastCardStyles.css';
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
    <div className="podcast-card-container">
      {url ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="link">
          <figure className="podcast-image-container">
            <img className="podcast-image" alt={image.alt} src={image.src} />
          </figure>
        </a>
      ) : (
        <figure className="podcast-image-container">
          <img className="podcast-image" alt={image.alt} src={image.src} />
        </figure>
      )}

      <div>
        {url ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="link">
            <p className="podcast-label">{label}</p>
          </a>
        ) : (
          <p className="podcast-label">{label}</p>
        )}
        <p className="podcast-artist">By {artist}</p>
      </div>
      <div className="podcast-description">
        <p className="podcast-description-header">Description:</p>
        <span className="podcast-description-summary">{summary}</span>
      </div>
    </div>
  );
};
