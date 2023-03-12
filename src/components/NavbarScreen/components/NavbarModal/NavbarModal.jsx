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
            Login
          </Link>
        </li>
        <li className='navbar-modal-list-item'>
          <Link to={'/qr'} onClick={() => setIsOpen(!isOpen)}>
            Generate QR
          </Link>
        </li>
        <li className='navbar-modal-list-item'>
          <Link
            to={`/room/${userInfo.room_id}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            My Room
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarModal;
