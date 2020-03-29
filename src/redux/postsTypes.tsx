const postsTypes = {
  SET_ITEMS: "posts/POSTS:SET_ITEMS",
  APPEND_ITEM: "posts/POSTS:APPEND_ITEM",
  REMOVE_ITEM: "posts/POSTS:REMOVE_ITEM"
};

export default postsTypes;

interface getItemsAC {
  type: typeof postsTypes.SET_ITEMS;
}

interface setItemsAC {
  type: typeof postsTypes.APPEND_ITEM;
  payload: {};
}

interface removeItemsAC {
  type: typeof postsTypes.REMOVE_ITEM;
}

export type ACTypes = getItemsAC | setItemsAC | removeItemsAC;
