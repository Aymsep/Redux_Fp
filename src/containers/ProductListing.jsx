import React,{useEffect} from 'react'
import '../App.css'
import ProductComp from './ProductComp'
import { getAllProducts } from '../Api/api';
import {useSelector, useDispatch} from 'react-redux'
import {setProducts} from '../redux/action/productactions'
const Listing = () => {
    const products = useSelector((product) => product.allProducts.products)
    console.log(products)
    const dispatch  = useDispatch()
    useEffect(()=>{
        getAllProducts().then(products =>{
            dispatch(setProducts(products.data))
        }).catch(err=>{
            console.log('not fetching product')
        })
    },[])

  return (
    <div className ="">
        <ProductComp/>
    </div>
  )
}

export default Listing