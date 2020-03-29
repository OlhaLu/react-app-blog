import { combineReducers } from "redux";
import postsTypes from "./postsTypes";

const postsReduсer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case postsTypes.SET_ITEMS:
      return payload;

    case postsTypes.APPEND_ITEM:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.data.item.id) {
            return {
              ...action.data.item
            };
          }
          return item;
        })
      };

    case postsTypes.REMOVE_ITEM:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};

export default combineReducers({
  items: postsReduсer
});
