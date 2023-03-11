import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/faceIOModalStyles.css';

const FaceIOModal = ({ hasOpen, setHasOpen }) => {
  const navigate = useNavigate();
  const [faceIOKey, setFaceIOKey] = useState(null);

  useEffect(() => {
    setFaceIOKey(new faceIO(import.meta.env.VITE_PUBLIC_FACEIO));
  }, []);

  const handleSignIn = async () => {
    setHasOpen(!hasOpen);
    try {
      const response = await faceIOKey.enroll({
        locale: 'auto',
        payload: {
          email: 'dieghoxcr7@gmail.com',
          pin: '12345',
        },
      });

      console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    setHasOpen(!hasOpen);
    try {
      const response = await faceIOKey.authenticate({
        locale: 'auto',
      });
      navigate('/');
      console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className='faceio-modal-container'
      style={{
        display: hasOpen ? 'flex' : 'none',
      }}
    >
      <button
        className='button-close-modal'
        onClick={() => setHasOpen(!hasOpen)}
      >
        <img
          src='/close-icon.svg'
          alt='close-icon'
          className='faceio-modal-close'
        />
      </button>
      <h2 className='faceio-modal-title'>Face Authentication by FaceIO</h2>
      <button className='faceio-modal-button' onClick={handleLogIn}>
        LogIn
      </button>
      <button className='faceio-modal-button' onClick={handleSignIn}>
        SignUp
      </button>
    </div>
  );
};

export default FaceIOModal;
