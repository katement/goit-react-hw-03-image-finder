import axios from 'axios';

export const fetchData = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=36718800-865d7f109e5b1a08d99b671a9&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data;
};
