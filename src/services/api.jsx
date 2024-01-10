import axios from "axios";

export const getSurahQuran = async () => {
  const surah = await axios.get(`${import.meta.env.VITE_API_BASEURL}`);
  return surah.data.data;
};

export const getDetailSurahQuran = async ({ id }) => {
  const surah = await axios.get(`${import.meta.env.VITE_API_BASEURL}/${id}`);
  return surah.data.data;
};
