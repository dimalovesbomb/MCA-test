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
    <Link to={url} className="link">
      <div className="outer-container">
        <figure className="image-container">
          <img className="image" alt={label} src={image[2].label} />
        </figure>
        <div className="inner-container">
          <p className="label">{label}</p>
          <p className="author">By {author}</p>
        </div>
      </div>
    </Link>
  );
};
