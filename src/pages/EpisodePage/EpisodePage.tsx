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
  console.log(currentEpisode);
  return (
    <main className="episode-page-container">
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
        <div className="episode-page-right-content">
          <h2>{currentEpisode?.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: DOMPurity.sanitize(currentEpisode?.content || '') }} />
          <div className="episode-page-listen-button-container">
            <a
              className="episode-page-listen-button"
              href={currentEpisode?.enclosures[0].url || ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              LISTEN LEGALLY
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
