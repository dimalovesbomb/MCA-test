import React from 'react';
import { useParams } from 'react-router';
import { useGetData, useGetDetails } from '../../hooks';
import { PodcastCard } from '../../components/PodcastCard';
import DOMPurity from 'isomorphic-dompurify';

import './EpisodePageStyles.css';

export const EpisodePage: React.FC = () => {
  const { podcastId, episodeId } = useParams();
  const { findPodcast } = useGetData();
  const currentPodcast = findPodcast(podcastId || '');
  const { details } = useGetDetails(podcastId);
  const currentEpisode = details?.items.find((episode) => episode.created === parseInt(atob(episodeId || '')));

  return (
    <main className="flex mx-auto mt-8 desktop:max-w-[1050px] max-w-[1000px] flex-wrap desktop:flex-nowrap justify-center desktop:justify-normal gap-12">
      <section>
        <PodcastCard
          image={{ src: currentPodcast?.['im:image'][2].label || '', alt: currentPodcast?.['im:artist'].label || '' }}
          label={currentPodcast?.['im:name'].label || ''}
          artist={currentPodcast?.['im:artist'].label || ''}
          summary={currentPodcast?.summary.label || ''}
          url={currentPodcast?.link}
        />
      </section>
      <section>
        <div className="rounded p-4 min-w-[25vw] shadow">
          <h2>{currentEpisode?.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: DOMPurity.sanitize(currentEpisode?.content || '') }} />
          <div className="flex-center rounded-full p-1 bg-primary-blue mt-16">
            <audio className="w-full" controls src={currentEpisode?.enclosures[0].url} controlsList="nodownload" />
          </div>
        </div>
      </section>
    </main>
  );
};
