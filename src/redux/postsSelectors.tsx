import { AppStateType } from "./rootReducer";

const getAllPosts = (state: AppStateType) => state.items && state.items.items;

export default {
  getAllPosts
};
