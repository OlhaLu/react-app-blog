import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const middleware = [thunk];
const composeEnhancers = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, composeEnhancers);

export default store;
