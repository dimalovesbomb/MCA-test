import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { MainPage } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
        index: true,
      },
      {
        path: '/podcast/:podcastId',
        async lazy() {
          const { PodcastDetailsPage } = await import(
            /* webpackMode: "lazy" */ './pages/PodcastDetailsPage/PodcastDetailsPage'
          );
          return { Component: PodcastDetailsPage };
        },
      },
      {
        path: '/podcast/:podcastId/episode/:episodeId',
        async lazy() {
          const { EpisodePage } = await import(/* webpackMode: "lazy" */ './pages/EpisodePage/EpisodePage');
          return { Component: EpisodePage };
        },
      },
    ],
  },
]);
