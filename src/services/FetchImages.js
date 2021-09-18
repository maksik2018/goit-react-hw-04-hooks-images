import axios from "axios";

const KEY = "22615955-8cacb706f354043da71650c83";
const BASE_URL = "https://pixabay.com/api/";

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data.hits;
};
