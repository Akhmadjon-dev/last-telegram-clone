import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8888",
  withCredentials: true,
});

export default axios;
