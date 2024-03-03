import axios from 'axios'

const PRODUCT_API_BASE_URL = 'http://localhost:8080/api/v1/products/'

class ProductService{
    getAllProducts() {
        return axios.get(PRODUCT_API_BASE_URL + 'all');
    }

    getNewProducts() {
        return axios.get(PRODUCT_API_BASE_URL + 'new')   ;
    }

    getDiscountedProducts() {
        return axios.get(PRODUCT_API_BASE_URL + 'discounted');
    }

    getAccessories() {
        return axios.get(PRODUCT_API_BASE_URL + 'accessories');
    }

}

export default new ProductService()