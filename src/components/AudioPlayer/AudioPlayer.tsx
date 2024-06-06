import React, { useEffect, useState } from 'react';
import { cn } from '../../helpers';
import { SET_DATA_FOR_PLAYER } from '../../helpers/constants';
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
    document.addEventListener(SET_DATA_FOR_PLAYER, cb);

    return () => {
      document.removeEventListener(SET_DATA_FOR_PLAYER, cb);
    };
  }, []);

  return (
    <div
      className={cn(
        'flex-center flex-col rounded-t-lg pt-1 pb-3 bg-primary-blue shadow-[1px_-6px_10px_rgba(176,177,181,0.75)]',
        className,
        {
          '!hidden': !data?.currentEpisode.enclosures[0].url,
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
