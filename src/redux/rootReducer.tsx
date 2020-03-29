import { combineReducers } from "redux";
import postsReduser from "./postsReducer";

const rootReducer = combineReducers({
  items: postsReduser
});

type rootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<rootReducerType>;
export default rootReducer;
