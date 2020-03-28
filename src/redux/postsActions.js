import postsTypes from "./postsTypes";

const setItems = items => ({
  type: postsTypes.SET_ITEMS,
  payload: items
});

const appendItem = item => ({
  type: postsTypes.APPEND_ITEM,
  payload: item
});

const removeItem = id => ({
  type: postsTypes.REMOVE_ITEM,
  payload: id
});

export default { setItems, appendItem, removeItem };
