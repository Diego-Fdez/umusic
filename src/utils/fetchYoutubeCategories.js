import axios from 'axios';

export const BASE_URL = `https://www.googleapis.com/youtube/v3/videoCategories`;

/**
 * This function takes a url as an argument, and returns the data from the API.
 * @returns The data object from the axios call.
 */
export const fetchCategories = async () => {
  const { data } = await axios(`${BASE_URL}`, {
    params: {
      part: 'snippet',
      regionCode: 'US',
      key: 'AIzaSyA01Mxc1RdjzJZeUuUKplNzu7Ww1QEvXTI',
    },
  });

  return data;
};
