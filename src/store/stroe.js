import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootREducer from "./reducers";

const store = createStore(
  rootREducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
