import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavbarScreen } from './components';
import { Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <NavbarScreen />
        <Routes>
          <Route path='/' index element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
