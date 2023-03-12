import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/navbarStyles.css';
import useVideoStore from '../../store/videoStore.js';
import userStore from '../../store/userStore';
import { NavbarModal } from './components';

const NavbarScreen = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const addKeyword = useVideoStore((state) => state.addKeyword);
  const { userInfo } = userStore((state) => state.user);
  const nameUrl = window.location.href;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      addKeyword(input);
      if (nameUrl !== '/') navigate('/');
      setInput('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className='navbar-container'>
      <div className='logo-container'>
        <Link to={'/'}>
          <h1 className='logo'>UMUSIC</h1>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        onKeyUp={(e) => {
          if (e.key === 'Enter') handleSubmit;
        }}
        className='search-container'
      >
        <input
          type='search'
          placeholder='Search your music'
          className='search-input'
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit' className='search-button'>
          <img
            src='/search-icon.svg'
            alt='search-icon'
            className='search-icon'
          />
        </button>
      </form>
      <nav className='profile-container'>
        <button className='profile-button' onClick={() => setIsOpen(!isOpen)}>
          <img
            src={userInfo?.picture ? userInfo?.picture : '/default-image.png'}
            alt={userInfo?.user_name ? userInfo?.user_name : 'user-image'}
            title={userInfo?.user_name ? userInfo?.user_name : 'Profile'}
            className='profile-image'
          />
        </button>
        <NavbarModal setIsOpen={setIsOpen} isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default NavbarScreen;
