import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './styles/temporaryAuthStyles.css';
import UseFetchFromDB from '../../hooks/useFetchFromDB';
import useVideoStore from '../../store/videoStore';
import { Loader } from '../../components';

const TemporaryAuth = () => {
  const [searchParams] = useSearchParams();
  const { fetchFromDB, baseURL } = UseFetchFromDB();
  const navigate = useNavigate();
  const loading = useVideoStore((state) => state.loading);

  /**
   * It takes the id and token from the URL, sends a POST request to the server, and then redirects the
   * user to the home page
   */
  async function getAuth() {
    const id = searchParams.get('id');
    const token = searchParams.get('token');

    try {
      await fetchFromDB(
        `${baseURL.auth}/temporary-login?id=
			${id}&token=${token}`,
        'POST'
      );
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAuth();
  }, []);

  return (
    <div className='temporary-auth'>
      <h1>UMUSIC</h1>
      <h2>Making Science...</h2>
      {loading && <Loader />}
    </div>
  );
};

export default TemporaryAuth;
