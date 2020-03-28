import postsTypes from "./postsTypes";
import { combineReducers } from "redux";

const postsReduсer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case postsTypes.SET_ITEMS:
      return payload;

    case postsTypes.APPEND_ITEM:
      return payload;

    case postsTypes.REMOVE_ITEM:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};

export default combineReducers({
  items: postsReduсer
});
