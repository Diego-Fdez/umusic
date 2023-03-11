import './styles/roomVideoListStyles.css';
import useVideoStore from '../../../../store/videoStore';
import { formattedTime } from '../../../../utils/formattedTime';

const RoomVideoList = () => {
  const videos = useVideoStore((state) => state.videoList);

  function handleVideoClick(videos) {
    videos.map((video) => {
      console.log(`https://www.youtube.com/watch?v=${video?.video_id}`);
    });
  }

  console.log(handleVideoClick(videos));

  return (
    <div className='room-list-container'>
      <h2 className='room-list-title'>Video List</h2>
      {videos?.map((video) => (
        <div key={video?.video_id} className='room-list-video'>
          <div className='room-video-thumbnail'>
            <img
              src={video?.video_pic_url}
              alt={video?.video_title}
              className='room-thumbnail-img'
            />
            <div className='video-list-duration-container'>
              <p>{formattedTime(video?.video_length)}</p>
            </div>
          </div>
          <div className='room-video-info-container'>
            <h4 className='room-video-list-title'>
              {video?.video_title.slice(0, 60)}
            </h4>
            <h6 className='room-list-author-title'>{video?.channel_title}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomVideoList;
