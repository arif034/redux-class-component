import { createStore } from "redux";
import cakeReducer from "./Cakes/CakeReducer.js";

const store = createStore(cakeReducer);

export default store;
