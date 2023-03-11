import { Link } from 'react-router-dom';
import './styles/playlistStyles.css';
import { useFetch } from '../../../../hooks/useFetchFromYoutube';
import useVideoStore from '../../../../store/videoStore';
import { formattedTime } from '../../../../utils/formattedTime';
import { Loader } from '../../../../components';

const Playlist = ({ videoId }) => {
  const videos = useVideoStore((state) => state.videos);
  const loading = useVideoStore((state) => state.loading);
  useFetch(`v1/video/related-contents/?id=${videoId}&hl=en&gl=US`);

  return (
    <div className='playlistDetail-container'>
      <h2 className='playlistDetail-title'>Related Videos</h2>
      {loading && <Loader />}
      {videos?.map((video) => (
        <div key={video?.video?.videoId} className='playlistDetail-video'>
          <div className='playlistDetail-video-thumbnail'>
            <Link to={`/watch/${video?.video?.videoId}`}>
              <img
                src={video?.video?.thumbnails[0]?.url}
                alt={video?.video?.title}
                className='video-thumbnail-img'
              />
            </Link>
            <div className='playListDetail-duration-container'>
              <p>{formattedTime(video?.video?.lengthSeconds)}</p>
            </div>
          </div>
          <div className='playlistDetail-info-container'>
            <Link to={`/watch/${video?.video?.videoId}`}>
              <h4 className='playlistDetail-video-title'>
                {video?.video?.title.slice(0, 60)}
              </h4>
            </Link>
            <Link to={`/channel/${video?.video?.author?.channelId}`}>
              <h6 className='playlistDetail-author-title'>
                {video?.video?.author?.title}
              </h6>
            </Link>
            <div className='playlistDetail-stats-container'>
              <span>
                {video?.video?.stats?.views
                  ? `${Number(video?.video?.stats?.views).toLocaleString(
                      'es-US'
                    )} views `
                  : '0 views'}
              </span>
              <span>
                {video?.video?.publishedTimeText
                  ? ` - ${video?.video?.publishedTimeText}`
                  : ''}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
