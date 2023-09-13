import axios from 'axios'

const PRODUCT_API_BASE_URL = 'http://localhost:8080/api'

class ProductService{
    getAllProducts() {
        return axios.get(PRODUCT_API_BASE_URL + '/All_board_games');
    }

    getDiscountedProducts() {
        return axios.get(PRODUCT_API_BASE_URL + '/Discounted_board_games');
    }

}

export default new ProductService()