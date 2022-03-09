import { createStore } from "redux";
import rootREducer from "./reducers";

const store = createStore(rootREducer);
export default store;
