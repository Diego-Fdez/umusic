import { Link } from 'react-router-dom';
import './styles/videoCardStyles.css';

const VideoCard = ({ video: { id, snippet } }) => {
  console.log(id);
  return (
    <>
      <div className='video-card-container'>
        <Link to={`/playlist/${id.videoId ? id.videoId : id}`}>
          <img
            src={
              snippet?.thumbnails?.high?.url
                ? snippet?.thumbnails?.high?.url
                : snippet?.thumbnails?.default?.url
            }
            alt={
              snippet?.localized ? snippet?.localized?.title : snippet?.title
            }
            className='video-card-image'
          />
        </Link>
        <div className='video-card-title'>
          <Link to={`/playlist/${id.videoId ? id.videoId : id}`}>
            <h4 className='title'>
              {snippet?.localized
                ? snippet?.localized?.title.slice(0, 60)
                : snippet?.title.slice(0, 60)}
            </h4>
          </Link>
          <Link to={`/channel/${snippet?.channelId}`}>
            <h6 className='subtitle'>{snippet?.channelTitle}</h6>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
