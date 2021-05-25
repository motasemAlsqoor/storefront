import { createStore, combineReducers } from "redux";
// this to make the dev tools work
import { composeWithDevTools } from "redux-devtools-extension";
import categories from "./categories";
import products from "./products";
import cart from './cart'
const reducers = combineReducers({
  categories: categories,
  products: products,
  cart:cart
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
