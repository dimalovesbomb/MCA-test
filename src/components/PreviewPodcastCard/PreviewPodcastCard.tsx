import React, { useEffect, useRef, useState } from 'react';
import { ImImage } from '../../types';
import { Link } from 'react-router-dom';
import { useOnScreen } from '../../hooks';

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
    <Link to={url} className="inline-block w-[17rem]" ref={ref}>
      <div className="flex flex-col items-center">
        <figure className="flex justify-center translate-y-2/4 origin-top mt-[-20%] w-[7.5rem] h-[7.5rem]">
          <img
            className="rounded-full object-cover"
            alt={label}
            data-src={image[2].label}
            {...(wasRendered && { src: image[2].label })}
          />
        </figure>
        <div className="flex flex-col items-center w-full bg-primary-white pt-[4.5rem] rounded-b-lg shadow-md hover:shadow-lg hover:transition-shadow">
          <p className="text-ellipsis overflow-hidden text-center text-primary-black uppercase px-2">{label}</p>
          <p className="text-ellipsis overflow-hidden text-center text-primary-gray text-sm mb-3">By {author}</p>
        </div>
      </div>
    </Link>
  );
};
