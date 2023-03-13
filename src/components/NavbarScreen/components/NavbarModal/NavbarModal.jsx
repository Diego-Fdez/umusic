import { Link } from 'react-router-dom';
import './styles/navbarModalStyles.css';
import userStore from '../../../../store/userStore';

const NavbarModal = ({ isOpen, setIsOpen }) => {
  const { userInfo } = userStore((state) => state.user);

  return (
    <div
      className='navbar-modal-container'
      style={{
        display: isOpen ? 'flex' : 'none',
      }}
    >
      <ul className='navbar-modal-list'>
        <li className='navbar-modal-list-item'>
          <Link to={'/login'} onClick={() => setIsOpen(!isOpen)}>
            <img
              src='/login-icon.svg'
              alt='login-icon'
              className='navbar-modal-item-img'
            />
            <p>Login</p>
          </Link>
        </li>
        <li className='navbar-modal-list-item'>
          <Link to={'/qr'} onClick={() => setIsOpen(!isOpen)}>
            <img
              src='/qrcode-icon.svg'
              alt='qrcode-icon'
              className='navbar-modal-item-img'
            />
            <p>Generate QR</p>
          </Link>
        </li>
        <li className='navbar-modal-list-item'>
          <Link
            to={`/room/${userInfo?.room_id}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src='/music-list-icon.svg'
              alt='music-list-icon'
              className='navbar-modal-item-img'
            />
            <p>My Room</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarModal;
