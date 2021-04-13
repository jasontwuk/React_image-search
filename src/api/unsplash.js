import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 546e64cf6b7da292a319759a2e8f45c2a02ca1b8dee6c777e60c866489b326f8",
  },
});
