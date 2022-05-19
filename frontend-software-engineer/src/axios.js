import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8001", // api base url
});

export default instance;
