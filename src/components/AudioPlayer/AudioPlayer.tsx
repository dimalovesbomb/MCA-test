import React, { useEffect, useState } from 'react';
import { cn } from '../../helpers';
import { SET_URL_EVENT } from '../../helpers/constants';
import type { Entry, Item } from '../../types';

interface AudioPlayerProps {
  className?: string;
}

interface AudioPlayerData {
  currentEpisode: Item;
  currentPodcast: Entry;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ className }) => {
  const [data, setData] = useState<AudioPlayerData | null>(null);

  useEffect(() => {
    const cb = (e: Event) => {
      setData((e as CustomEvent<AudioPlayerData>).detail);
    };
    document.addEventListener(SET_URL_EVENT, cb);

    return () => {
      document.removeEventListener(SET_URL_EVENT, cb);
    };
  }, []);

  return (
    <div
      className={cn(
        'flex-center flex-col rounded-t-lg pt-1 pb-3 bg-primary-blue shadow-[1px_-6px_10px_rgba(176,177,181,0.75)]',
        className,
        {
          invisible: !data?.currentEpisode.enclosures[0].url,
        },
      )}
    >
      <div className="flex gap-x-3 mb-1 mx-1">
        <p className="text-primary-white text-sm text-ellipsis overflow-hidden">{data?.currentEpisode.title || ''}</p>
        <p className="text-primary-white italic text-sm text-center text-ellipsis overflow-hidden">
          {data?.currentPodcast?.['im:artist'].label || ''}
        </p>
      </div>
      <audio
        src={data?.currentEpisode.enclosures[0].url || ''}
        className="w-full px-4"
        controls
        controlsList="nodownload"
      />
    </div>
  );
};
