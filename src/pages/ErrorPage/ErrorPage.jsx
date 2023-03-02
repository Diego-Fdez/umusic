import { useNavigate } from 'react-router-dom';
import './styles/errorPageStyles.css';
import { NavbarScreen, HeadScreen } from '../../components';

const ErrorPage = () => {
  const navigate = useNavigate();

  const gifsErrors = [
    'd2jjuAZzDSVLZ5kI',
    'Bp3dFfoqpCKFyXuSzP',
    'hv5AEBpH3ZyNoRnABG',
    'hLwSzlKN8Fi6I',
  ];

  const randomImage = () => {
    return `https://media.giphy.com/media/${
      gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]
    }/giphy.gif`;
  };

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <HeadScreen pageTitle={'Error 404'} />
      <NavbarScreen />
      <div className='App-wrapper'>
        <div className='pageErrorStyles'>
          <span className='codeErrorStyles'>404</span>
          <span className='msgErrorStyles'>
            Sometimes getting lost isn't that bad
          </span>
          <img
            className='gifErrorStyles'
            src={randomImage()}
            alt='alt-page-404'
            loading='lazy'
          />
          <button className='btn-error-page' onClick={handleClick}>
            Go back to home page!
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
