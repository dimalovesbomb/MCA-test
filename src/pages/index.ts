import { lazy } from 'react';

export { MainPage } from './MainPage/MainPage';

export const PodcastDetailsPage = lazy(() => import('./PodcastDetailsPage/PodcastDetailsPage'));
export const EpisodePage = lazy(() => import('./EpisodePage/EpisodePage'));
