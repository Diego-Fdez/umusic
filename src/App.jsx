import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Login, PlayList, ErrorPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/playlist/:id' element={<PlayList />} />
          <Route path='/:rest/*' element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
