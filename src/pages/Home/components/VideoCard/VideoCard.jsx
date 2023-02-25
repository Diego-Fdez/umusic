import { Link } from 'react-router-dom';
import './styles/videoCardStyles.css';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className='video-card-container'>
      <Link to={`/video/${videoId}`}>
        <img
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          className='video-card-image'
        />
      </Link>
      <div className='video-card-title'>
        <Link to={`/video/${videoId}`}>
          <h4 className='title'>{snippet?.title.slice(0, 60)}</h4>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`}>
          <h6 className='subtitle'>{snippet?.channelTitle}</h6>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
