import { combineReducers, createStore } from "redux";
import { productsReducer } from "./productsReducer";

import { userReducer } from "./userReducer";

const reducers = combineReducers({
    currentUser: userReducer,
    products: productsReducer
})


export const store = createStore(reducers)

window.store = store