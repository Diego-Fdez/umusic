import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles/roomStyles.css';
import { NavbarScreen, Loader, HeadScreen } from '../../components';
import { VideoHeader, RoomVideoList, VideoScreen } from './components';
import UseFetchFromDB from '../../hooks/useFetchFromDB';
import useVideoStore from '../../store/videoStore';

const Room = () => {
  const { id } = useParams();
  const { getVideoList } = UseFetchFromDB();
  const loading = useVideoStore((state) => state.loading);

  useEffect(() => {
    getVideoList(id);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <HeadScreen pageTitle='Music Room' />
      <NavbarScreen />
      <main className='room-container'>
        <article className='player-video-container'>
          <VideoScreen />
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
