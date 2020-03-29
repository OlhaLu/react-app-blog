const axios = require("axios");
axios.defaults.baseURL = "https://simple-blog-api.crew.red";
axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";

interface apiData {
  id: number;
}

const getPosts = () => {
  return axios.get(`/posts`);
};

const getPost = (id: number) => {
  axios.get<apiData>`/posts/${id}?_embed=comments`;
};

const createNewPost = () => {
  axios.post(`/posts`);
};

const removePost = (id: number) => {
  axios.delete<apiData>`/posts/${id}`;
};

export default {
  getPosts,
  getPost,
  createNewPost,
  removePost
};
