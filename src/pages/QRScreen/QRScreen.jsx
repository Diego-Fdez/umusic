import { useEffect, useState } from 'react';
import './styles/qrScreenStyles.css';
import UseFetchFromDB from '../../hooks/useFetchFromDB';
import userStore from '../../store/userStore';
import { NavbarScreen, HeadScreen } from '../../components';

const QRScreen = () => {
  const { fetchFromDB, baseURL } = UseFetchFromDB();
  const user = userStore((state) => state.user);
  const [qr, setQR] = useState();

  async function fetchQR() {
    const setData = {
      id: user?.userInfo?.id,
      token: user?.music_token,
    };

    try {
      const result = await fetchFromDB(baseURL.getQR, 'POST', setData);
      setQR(result?.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchQR();
  }, []);

  return (
    <>
      <HeadScreen pageTitle='Generate QR' />
      <NavbarScreen />
      <div className='qr-container'>
        <div className='qr-box'>
          <img src={qr} alt='qr-image' />
        </div>
      </div>
    </>
  );
};

export default QRScreen;
