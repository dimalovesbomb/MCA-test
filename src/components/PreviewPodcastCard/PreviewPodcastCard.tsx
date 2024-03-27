import React, { useEffect, useRef, useState } from 'react';
import { ImImage } from '../../types';
import { Link } from 'react-router-dom';
import { useOnScreen } from '../../hooks';

import './PreviewPodcastCardStyles.css';

interface PodcastCardProps {
  image: ImImage[];
  label: string;
  author: string;
  url: string;
}

export const PreviewPodcastCard: React.FC<PodcastCardProps> = ({ image, label, author, url }) => {
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref);
  const [wasRendered, setWasRendered] = useState(false);

  useEffect(() => {
    if (isOnScreen) {
      setWasRendered(true);
    }
  }, [isOnScreen]);

  return (
    <Link to={url} className="preview-link" ref={ref}>
      <div className="preview-outer-container">
        <figure className="preview-image-container">
          <img
            className="preview-image"
            alt={label}
            data-src={image[2].label}
            {...(wasRendered && { src: image[2].label })}
          />
        </figure>
        <div className="preview-inner-container">
          <p className="preview-label">{label}</p>
          <p className="preview-author">By {author}</p>
        </div>
      </div>
    </Link>
  );
};
