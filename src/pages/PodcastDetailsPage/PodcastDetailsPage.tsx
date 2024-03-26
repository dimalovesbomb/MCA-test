import React from 'react';
import { useParams } from 'react-router';
import { useGetData, useGetDetails } from '../../hooks';
import { PodcastCard } from '../../components/PodcastCard';
import { Table } from '../../modules/Table';

import './PodcastDetailsPageStyles.css';

export const PodcastDetailsPage: React.FC = () => {
  const { podcastId } = useParams();
  const { findPodcast } = useGetData();
  const currentPodcast = findPodcast(podcastId || '');
  const { details } = useGetDetails(podcastId);

  return (
    <div>
      <main className="podcast-details-page-container">
        <section>
          <PodcastCard
            image={{ src: currentPodcast?.['im:image'][2].label || '', alt: currentPodcast?.['im:artist'].label || '' }}
            label={currentPodcast?.['im:name'].label || ''}
            artist={currentPodcast?.['im:artist'].label || ''}
            summary={currentPodcast?.summary.label || ''}
          />
        </section>

        <section className="podcast-details-page-right">
          <div className="podcast-details-page-right-header">
            <h2>Episodes: {details?.items.length}</h2>
          </div>
          <div>
            <Table items={details?.items || []} podcastId={podcastId || ''} />
          </div>
        </section>
      </main>
    </div>
  );
};
