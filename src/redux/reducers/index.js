import { combineReducers } from "redux";

import { products } from "./ProductReducers";

const reducers = combineReducers({
    allProducts : products
})

export default reducers 