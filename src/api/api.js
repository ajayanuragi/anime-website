import axios from "axios";
const url = import.meta.env.VITE_ANIME_API;
console.log(url)

const api =  axios.create({
  baseURL :url,
});

export default api
