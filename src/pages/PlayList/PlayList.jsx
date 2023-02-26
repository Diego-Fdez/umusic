import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './styles/playListStyles.css';
import { NavbarScreen } from '../../components';
import { PlayListDetail } from './components';
import useVideoStore from '../../store/videoStore';

const PlayList = () => {
  const { id } = useParams();
  const videos = useVideoStore((state) => state.videos);
  const [selectedVideo, setSelectedVideo] = useState({});

  /**
   * Find the video with the id that matches the id passed in as an argument and set that video as the
   * selected video.
   */
  function getSelectedVideo(id) {
    const video = videos.find((video) =>
      video.id.videoId ? video.id.videoId : video.id === id
    );
    setSelectedVideo(video);
  }

  useEffect(() => {
    getSelectedVideo(id);
  }, [id]);

  return (
    <>
      <NavbarScreen />
      <main className='main-container'>
        <article className='player-container'>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            width='100%'
            height='100%'
            controls={true}
            loop
          />
        </article>
        <div className='video-info'>
          <h4 className='video-info-title'>{selectedVideo?.snippet?.title}</h4>
          <h6 className='video-info-subtitle'>
            {selectedVideo?.snippet?.channelTitle}
          </h6>
        </div>
        <aside>
          <PlayListDetail />
        </aside>
      </main>
    </>
  );
};

export default PlayList;
