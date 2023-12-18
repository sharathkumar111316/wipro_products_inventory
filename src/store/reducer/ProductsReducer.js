const initialState = {
    products: []
}

const ProductsReducer = (state = initialState, action) => {
    if (action.type === "LIST_PRODUCTS") {
        return {
            ...state, products: action.payload //action.payload will return the data in object format
        }
    }
    else {
        return state;
    }
}

export default ProductsReducer;