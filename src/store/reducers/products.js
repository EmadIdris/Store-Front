const productsReducer = (state = {
    allBooks: [],
    categoryBooks: [],
    currentProduct: {}
}, action) => {
    switch (action.type) {
        case 'INITIAL_GET':
            return {
                ...state,
                allBooks: action.payload.result
            };
        case 'GET':
            let result = state.allBooks.filter(item => item.category === action.payload);
            return {
                ...state,
                categoryBooks: result
            };
        case 'DECREMENT_STOCK':
            return state.map(item => {
                if (item.name === action.payload.name) {
                    item = action.payload;
                }
                return item;
            });
        case 'CURRENT_PRODUCT':
            console.log(action)
            return {
                ...state,
                currentProduct: action.payload
            }
        default:
            return state;
    }
}
export default productsReducer;
