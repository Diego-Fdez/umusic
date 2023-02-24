import './styles/navbarStyles.css';

const NavbarScreen = () => {
  return (
    <nav className='navbar-container'>
      <div className='logo-container'>
        <h1 className='logo'>UMUSIC</h1>
      </div>
      <div className='search-container'>
        <input
          type='search'
          placeholder='Search your music'
          className='search-input'
        />
        <button className='search-button'>S</button>
      </div>
      <div className='profile-container'>
        <img
          src='data:image/png;base64,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'
          alt='profile-image'
          className='profile-image'
        />
      </div>
    </nav>
  );
};

export default NavbarScreen;
