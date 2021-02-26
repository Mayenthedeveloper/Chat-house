import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Accept: "application/json",
  },

  register: () => {},

  logout: () => {},
});

export default API;
