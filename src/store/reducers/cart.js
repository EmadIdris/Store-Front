const { v4: uuidv4 } = require('uuid');
//---------------
const initialState = {
    isOpen: false,
    items: [],
    totalPrice: 0
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_CART':
            return {
                ...state,
                isOpen: true
            }
        case 'CLOSE_CART':
            return {
                ...state,
                isOpen: false
            }
        case 'ADD_TO_CART':
            let newItem = action.payload;
            newItem['uniqueID'] = uuidv4();
            return {
                ...state,
                items: [...state.items, newItem],
                totalPrice: state.totalPrice + Number(newItem.price)
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter((item) => (item.uniqueID !== action.payload.uniqueID) && (item.inventoryCount !== action.payload.item.inventoryCount)),
                totalPrice: state.totalPrice - Number(action.payload.item.price)
            }
        case 'CHECKOUT':
            return {
                ...state,
                items: [],
                totalPrice: 0
            }
        default:
            return state;
    }
}
export default cartReducer;