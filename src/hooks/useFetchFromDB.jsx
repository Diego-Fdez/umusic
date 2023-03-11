import useVideoStore from '../store/videoStore';

const UseFetchFromDB = () => {
  const loading = useVideoStore((state) => state.setLoading);
  const addVideoList = useVideoStore((state) => state.addVideoList);

  const baseURL = {
    addVideosToList: import.meta.env.VITE_SERVER_URL,
    getRoomList: `${import.meta.env.VITE_SERVER_URL}/room`,
    roomInfo: 'http://localhost:3000/rooms/info',
  };

  async function fetchFromDB(url, method, setData) {
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(setData),
    };

    /* Creating a new instance of the AbortController class. */
    const abortController = new AbortController();
    loading(true);
    const result = fetch(url, options, {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.log(error))
      .finally(() => loading(false));

    return result;
  }

  async function getVideoList(id) {
    try {
      const result = await fetchFromDB(`${baseURL.getRoomList}/${id}`, 'GET');
      addVideoList(result?.data);
    } catch (error) {
      console.log(error);
    }
  }

  return { baseURL, fetchFromDB, getVideoList };
};

export default UseFetchFromDB;
