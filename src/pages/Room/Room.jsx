import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './styles/roomStyles.css';
import { NavbarScreen } from '../../components';
import { VideoHeader, RoomVideoList } from './components';
import UseFetchFromDB from '../../hooks/useFetchFromDB';

const Room = () => {
  const { id } = useParams();
  const { getVideoList } = UseFetchFromDB();

  useEffect(() => {
    getVideoList(id);
  }, []);

  return (
    <>
      <NavbarScreen />
      <main className='room-container'>
        <article className='player-video-container'>
          <div className='player-wrapper'>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=`}
              width='100%'
              height='100%'
              controls={true}
              loop
            />
          </div>
          <VideoHeader />
        </article>
        <aside>
          <RoomVideoList />
        </aside>
      </main>
    </>
  );
};

export default Room;
