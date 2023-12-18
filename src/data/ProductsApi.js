import axios from "axios";

export default class ProductsAPI {
    static getAllProducts() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get("http://localhost:3001/products");
                resolve(response.data);
            }
            catch (error) {
                reject(error);
            }
        })
    }
}