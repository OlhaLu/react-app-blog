const axios = require("axios");
axios.defaults.baseURL = "https://simple-blog-api.crew.red";
axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";

const getPosts = () => {
  return axios.get(`/posts`);
};

const getPost = id => {
  axios.get(`/posts/${id}?_embed=comments`);
};

const createNewPost = () => {
  axios.post(`/posts`);
};

const removePost = id => {
  axios.delete(`/posts/${id}`);
};

export default {
  getPosts,
  getPost,
  createNewPost,
  removePost
};
