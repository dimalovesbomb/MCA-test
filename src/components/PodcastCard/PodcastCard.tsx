import React from 'react';
import './PodcastCardStyles.css';

interface PodcastCardProps {
  image: {
    alt: string;
    src: string;
  };
  label: string;
  artist: string;
  summary: string;
}

export const PodcastCard: React.FC<PodcastCardProps> = ({ image, label, artist, summary }) => {
  return (
    <div className="podcast-card-container">
      <figure className="podcast-image-container">
        <img className="podcast-image" alt={image.alt} src={image.src} />
      </figure>
      <div>
        <p className="podcast-label">{label}</p>
        <p className="podcast-artist">By {artist}</p>
      </div>
      <div className="podcast-description">
        <p className="podcast-description-header">Description:</p>
        <span className="podcast-description-summary">{summary}</span>
      </div>
    </div>
  );
};
