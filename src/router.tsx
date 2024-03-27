import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { EpisodePage, MainPage, PodcastDetailsPage } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
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
