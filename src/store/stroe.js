import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { setLocalStorage } from "@utils/localStorage";
import rootREducer from "./reducers";

const store = createStore(
  rootREducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  setLocalStorage("store", store.getState().favoriteReducer);
});
export default store;
