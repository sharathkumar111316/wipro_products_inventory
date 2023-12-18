import ProductsAPI from "../../data/ProductsApi"

export const ListProducts = () => (dispatch) => {
    ProductsAPI.getAllProducts()
        .then((data) => {
            dispatch({
                type: "LIST_PRODUCTS",
                payload: data
            })
        }, (error) => { console.log(error) })
}