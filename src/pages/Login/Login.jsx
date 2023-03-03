import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/loginStyles.css';
import { FaceIOModal } from './components';
import { HeadScreen } from '../../components';

const Login = () => {
  const [hasOpen, setHasOpen] = useState(false);

  return (
    <>
      <HeadScreen pageTitle={'Login'} />
      <div className='login-container'>
        <FaceIOModal hasOpen={hasOpen} setHasOpen={setHasOpen} />
        <Link to={'/'}>
          <h2 className='login-logo'>UMUSIC</h2>
        </Link>
        <div className='login-wrapper'>
          <h1 className='login-title'>
            Connect to <span className='login-title-span'>U</span>MUSIC
          </h1>
          <p className='login-subtitle'>
            Sign in, listen to your music, create playlists and share with your
            friends.
          </p>
        </div>
        <div className='login-buttons-container'>
          <button>
            <img src='/google.svg' alt='google-logo' className='logo-img' />
            Connect with Google
          </button>
          <button>
            <img
              src='/facebook.svg'
              alt='facebook-logo'
              className='logo-img-facebook'
            />
            Connect with Facebook
          </button>
          <button onClick={() => setHasOpen(!hasOpen)}>
            <img src='/face-id.svg' alt='face-id-logo' className='logo-img' />
            Connect with FaceIO
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
