import axios from 'axios'

const api = axios.create({
    baseURL:'https://fakestoreapi.com',
    headers:{
        'Content-type': 'application/json'
    }
})

export function getAllProducts(){
    return api.get('/products')
}

export function getProductById(id){
    return api.get('/products/' + id)
}


export default api