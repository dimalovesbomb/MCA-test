import './EpisodePageStyles.css';
import { useParams } from 'react-router';

export const EpisodePage: React.FC = () => {
  const { podcastId, episodeId } = useParams();
  return (
    <div>
      {podcastId} kjdsfbjw {atob(episodeId || '')}
    </div>
  );
};
