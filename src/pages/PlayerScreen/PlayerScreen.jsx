import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './styles/playerScreen.css';
import { NavbarScreen, HeadScreen } from '../../components';
import { Playlist } from './components';
import useVideoStore from '../../store/videoStore';

const PlayerScreen = () => {
  const { id } = useParams();
  const videos = useVideoStore((state) => state.videos);
  const [selectedVideo, setSelectedVideo] = useState({});

  /**
   * Find the video with the id that matches the id passed in as an argument and set that video as the
   * selected video.
   */
  function getSelectedVideo(id) {
    const video = videos.find((video) => video.video?.videoId === id);
    setSelectedVideo(video);
  }

  useEffect(() => {
    getSelectedVideo(id);
  }, [id]);

  return (
    <>
      <HeadScreen pageTitle={selectedVideo?.video?.title} />
      <NavbarScreen />
      <main className='main-container'>
        <div className='playList-video-wrapper'>
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
            <h4 className='video-info-title'>{selectedVideo?.video?.title}</h4>
            <div className='info-author-container'>
              <img
                src={selectedVideo?.video?.author?.avatar[0]?.url}
                alt={selectedVideo?.video?.author?.title}
                className='info-author-avatar'
              />
              <h6 className='video-info-subtitle'>
                {selectedVideo?.video?.author?.title}
              </h6>
            </div>
            <div className='info-stats-container'>
              <span>
                {selectedVideo?.video?.stats?.views
                  ? `${Number(
                      selectedVideo?.video?.stats?.views
                    ).toLocaleString('es-US')} views `
                  : '0 views'}
              </span>
              <span>
                {selectedVideo?.video?.publishedTimeText
                  ? ` - ${selectedVideo?.video?.publishedTimeText}`
                  : ''}
              </span>
            </div>
          </div>
        </div>
        <aside>
          <Playlist videoId={id} />
        </aside>
      </main>
    </>
  );
};

export default PlayerScreen;
