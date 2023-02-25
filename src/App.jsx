import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Login } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
