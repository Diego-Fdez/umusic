import useVideoStore from '../store/videoStore';

const UseFetchFromDB = () => {
  const loading = useVideoStore((state) => state.setLoading);
  const addVideoList = useVideoStore((state) => state.addVideoList);

  const baseURL = {
    addVideosToList: `${import.meta.env.VITE_SERVER_URL}/room`,
    getRoomList: `${import.meta.env.VITE_SERVER_URL}/room`,
    getQR: `${import.meta.env.VITE_SERVER_URL}/qr`,
    auth: `${import.meta.env.VITE_SERVER_URL}`,
  };

  /**
   * It fetches data from a database and returns the data.
   * @returns The result of the fetch call.
   */
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
      .catch((error) => error)
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
