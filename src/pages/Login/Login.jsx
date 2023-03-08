import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/loginStyles.css';
import { FaceIOModal } from './components';
import { HeadScreen } from '../../components';
import UseAuth from '../../hooks/useAuth';
import { Loader } from '../../components';
import userStore from '../../store/userStore';

const Login = () => {
  const [hasOpen, setHasOpen] = useState(false);
  const { googleLogin, Facebook } = UseAuth();
  const loading = userStore((state) => state.loadingUser);

  return (
    <>
      {loading && <Loader />}
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
          <button onClick={() => googleLogin()}>
            <img src='/google.svg' alt='google-logo' className='logo-img' />
            Connect with Google
          </button>
          <Facebook />
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
