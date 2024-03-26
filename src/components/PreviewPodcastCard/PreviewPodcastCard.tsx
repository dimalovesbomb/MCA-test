import React from 'react';
import { ImImage } from '../../types';
import { Link } from 'react-router-dom';

import './PreviewPodcastCardStyles.css';

interface PodcastCardProps {
  image: ImImage[];
  label: string;
  author: string;
  url: string;
}

export const PreviewPodcastCard: React.FC<PodcastCardProps> = ({ image, label, author, url }) => {
  return (
    <Link to={url} className="preview-link">
      <div className="preview-outer-container">
        <figure className="preview-image-container">
          <img className="preview-image" alt={label} src={image[2].label} />
        </figure>
        <div className="preview-inner-container">
          <p className="preview-label">{label}</p>
          <p className="preview-author">By {author}</p>
        </div>
      </div>
    </Link>
  );
};
