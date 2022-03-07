import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "05c11592e49074e0fc9e58600c57c842",
    language: "ko-KR",
  },
})

export default instance