import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';
import { combineReducers } from 'redux';
//----------------------------------------
const allReducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer
});
export default allReducers;