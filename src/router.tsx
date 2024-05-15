import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { EpisodePage, MainPage, PodcastDetailsPage } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>...loading</div>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <MainPage />,
        index: true,
      },
      {
        path: '/podcast/:podcastId',
        element: <PodcastDetailsPage />,
      },
      {
        path: '/podcast/:podcastId/episode/:episodeId',
        element: <EpisodePage />,
      },
    ],
  },
]);
