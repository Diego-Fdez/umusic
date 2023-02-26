import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './styles/playListStyles.css';
import { NavbarScreen } from '../../components';

const PlayList = () => {
  const { id } = useParams();

  return (
    <>
      <NavbarScreen />
      <div className='player-container'>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          width='100%'
          height='100%'
          controls={true}
          loop
        />
      </div>
    </>
  );
};

export default PlayList;
