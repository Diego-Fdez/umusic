import { Link } from 'react-router-dom';
import './styles/videoCardStyles.css';
import { formattedTime } from '../../../../utils/formattedTime';
import UseFetchFromDB from '../../../../hooks/useFetchFromDB';
import userStore from '../../../../store/userStore';

const VideoCard = ({ video }) => {
  const { fetchFromDB, baseURL } = UseFetchFromDB();
  const user = userStore((state) => state.user);

  /** It creates an object with the data that will be sent to the database, and then calls the
   * `fetchFromDB` function from the `UseFetchFromDB` hook */
  const handleClick = () => {
    /* Creating an object with the data that will be sent to the database. */
    const setData = {
      roomId: user?.userInfo?.room_id,
      userId: user?.userInfo?.id,
      videoId: video?.videoId,
      channelId: video?.author?.channelId,
      videoTitle: video?.title,
      channelTitle: video?.author?.title,
      videoPictureURL: video?.thumbnails[0]?.url,
      channelPictureURL: video?.author?.avatar[0]?.url,
      videoLength: video?.lengthSeconds,
    };

    /* Calling the `fetchFromDB` function from the `UseFetchFromDB` hook. */
    fetchFromDB(`${baseURL.addVideosToList}/room`, 'POST', setData);
  };

  return (
    <>
      <div className='video-card-container'>
        <Link to={`/watch/${video?.videoId}`}>
          <img
            src={video?.thumbnails[0]?.url}
            alt={video?.videoId}
            className='video-card-image'
            onMouseOver={(e) =>
              (e.target.src =
                video?.movingThumbnails !== null
                  ? video?.movingThumbnails[0]?.url
                  : video?.thumbnails[0]?.url)
            }
            onMouseLeave={(e) => (e.target.src = video?.thumbnails[0]?.url)}
          />
        </Link>
        <div className='duration-container'>
          <p>{formattedTime(video?.lengthSeconds)}</p>
        </div>
        <div className='video-card-title'>
          <Link to={`/watch/${video?.videoId}`}>
            <h4 className='title'>{video?.title.slice(0, 60)}</h4>
          </Link>
          <div className='author-container'>
            <img
              src={video?.author?.avatar[0]?.url}
              alt={video?.author?.title}
              className='author-image'
            />
            <Link to={`/channel/${video?.author?.channelId}`}>
              <h6 className='subtitle'>{video?.author?.title}</h6>
            </Link>
          </div>
          <div className='stats-container'>
            <span>
              {video?.stats?.views
                ? `${Number(video?.stats?.views).toLocaleString(
                    'es-US'
                  )} views `
                : '0 views'}
            </span>
            <span>
              {video?.publishedTimeText ? ` - ${video?.publishedTimeText}` : ''}
            </span>
            <button className='add-button' onClick={() => handleClick()}>
              <img src='/add-icon.svg' alt='add-icon' className='add-icon' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
