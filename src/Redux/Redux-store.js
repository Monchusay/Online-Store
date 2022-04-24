import {combineReducers, createStore} from "redux";
import ProductListPageReducer from "./ProductListPageReducer";

let reducers = combineReducers({
    ProductListPage: ProductListPageReducer
})


let store = createStore(reducers);
window.store = store;

export default store
