const categoriesReducer = (state = {
    allCategories: [],
    currentCategory: {}
}, action) => {
    switch (action.type) {
        case 'INITIAL_GET':
            console.log(action.payload.categories)
            return {
                ...state,
                allCategories: action.payload.categories
            }
        case 'GET':
            let category = state.allCategories.filter(element => element.name.toLowerCase() === action.payload)[0];
            return {
                ...state,
                currentCategory: {
                    displayName: category.name,
                    description: category.description
                }
            }
        default:
            return state;
    }
}
export default categoriesReducer;