import React from 'react';
import { Entry, Id } from '../../../types';
import { PreviewPodcastCard } from '../../PreviewPodcastCard';

interface PodcastCardsProps {
  entries: Entry[];
}

export const PodcastCards: React.FC<PodcastCardsProps> = ({ entries }) => {
  const composeUrl = (id: Id) => `/podcast/${id.attributes?.['im:id']}`;

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8">
      {entries.map((card) => (
        <PreviewPodcastCard
          key={card.id.attributes?.['im:id']}
          image={card['im:image']}
          label={card['im:name'].label}
          author={card['im:artist'].label}
          url={composeUrl(card.id)}
        />
      ))}
    </div>
  );
};
