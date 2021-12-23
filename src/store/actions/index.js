const axios = require('axios');
// I used this API from my colleagues
const URL = 'https://h3-store-app.herokuapp.com';
export const getAll = () => dispatch => {
    return axios.get(`${URL}/books`).then(res => {
        axios.get(`${URL}/categories`).then(res2 => {
            dispatch({
                type: 'INITIAL_GET',
                payload: {
                    categories: res2.data,
                    result: res.data
                }
            });
        })
    });
}
//---------------------------------------------------------------------------------------
export const get = (category) => dispatch => {
    dispatch({
        type: 'GET',
        payload: category
    });
}
//---------------------------------------------------------------------------------------
export const decrementStock = (item) => dispatch => {
    item.inventoryCount--;
    return axios.put(`${URL}/books/${item.id}`, item).then(res => {
        dispatch({
            type: 'DECREMENT_STOCK',
            payload: res.data
        });
    });
}
//---------------------------------------------------------------------------------------
export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}
//---------------------------------------------------------------------------------------
export const removeFromCart = (item) => dispatch => {
    item.inventoryCount++;
    let uniqueID = item.uniqueID;
    return axios.put(`${URL}/books/${item.id}`, item).then(res => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                item: res.data,
                uniqueID: uniqueID
            }
        });
    });
}
//---------------------------------------------------------------------------------------
export const openCart = () => {
    return {
        type: 'OPEN_CART'
    }
}
//---------------------------------------------------------------------------------------
export const closeCart = () => {
    return {
        type: 'CLOSE_CART'
    }
}
//---------------------------------------------------------------------------------------
export const cartCheckout = () => {
    return {
        type: 'CHECKOUT'
    }
}
//---------------------------------------------------------------------------------------
export const currentProduct = (item) => {
    return {
        type: 'CURRENT_PRODUCT',
        payload: item
    }
}
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------