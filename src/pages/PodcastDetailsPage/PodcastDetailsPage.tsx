import React from 'react';
import { useParams } from 'react-router';
import { useGetData, useGetDetails } from '../../hooks';
import { PodcastCard } from '../../components/PodcastCard';
import { Table } from '../../components/modules/Table';

export const PodcastDetailsPage: React.FC = () => {
  const { podcastId } = useParams();
  const { findPodcast } = useGetData();
  const currentPodcast = findPodcast(podcastId || '');
  const { details } = useGetDetails(podcastId);

  return (
    <main className="flex mx-auto mt-8 max-w-[1000px] tablet:max-w-[1050px] gap-4 desktop:gap-12 flex-wrap tablet:flex-nowrap">
      <section className="flex justify-center w-full tablet:w-fit h-fit">
        <PodcastCard
          image={{ src: currentPodcast?.['im:image'][2].label || '', alt: currentPodcast?.['im:artist'].label || '' }}
          label={currentPodcast?.['im:name'].label || ''}
          artist={currentPodcast?.['im:artist'].label || ''}
          summary={currentPodcast?.summary.label || ''}
          url={currentPodcast?.link}
        />
      </section>

      <section className="w-full">
        <div className="rounded text-primary-black p-4 shadow">
          <h2 className="m-0">Episodes: {details?.items?.length || 0}</h2>
        </div>
        <div>
          <Table items={details?.items || []} podcastId={podcastId || ''} />
        </div>
      </section>
    </main>
  );
};
