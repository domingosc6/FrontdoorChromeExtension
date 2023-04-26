import axios from "axios";
import fetchAdapter from '@vespaiach/axios-fetch-adapter';

export default axios.create({
  adapter: fetchAdapter,
  baseURL: "http://localhost:3030/api/v1/",
  headers: {
    "Content-type": "application/json"
  },
});