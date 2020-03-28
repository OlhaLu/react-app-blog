import postsActions from "./postsActions";
import api from "../services/api-service";

const fetchItems = () => dispatch => {
  api.getPosts().then(({ data }) => {
    dispatch(postsActions.setItems(data));
  });
};

const fetchItem = id => dispatch => {
  api.getPosts(id).then(({ data }) => {
    dispatch(postsActions.appendItem(data));
  });
};

const createNewPost = () => dispatch => {
  api.createNewPost();
};

const fetchRemoveItem = id => dispatch => {
  dispatch(postsActions.removeItem(id));
  api.removePost(id);
};

export default {
  fetchItems,
  fetchItem,
  createNewPost,
  fetchRemoveItem
};
