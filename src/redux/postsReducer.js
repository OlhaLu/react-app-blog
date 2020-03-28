import postsTypes from "./postsTypes";

const postsReduсer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case postsTypes.SET_ITEMS:
      return {
        ...state,
        items: payload
      };
    case postsTypes.APPEND_ITEM:
      return {
        ...state,
        items: state.items ? [...state.items, payload] : [payload]
      };
    case postsTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== payload)
      };
    default:
      return state;
  }
};

export default postsReduсer;
