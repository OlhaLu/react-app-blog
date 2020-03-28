import { combineReducers } from "redux";
import postsReduser from "./postsReducer";

const rootReducer = combineReducers({
  items: postsReduser
});

export default rootReducer;
