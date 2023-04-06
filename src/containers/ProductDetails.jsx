import React,{useEffect} from 'react'
import { getProductById } from '../Api/api'
import {useSelector,useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {selectedProduct,removeSelectedProduct} from '../redux/action/productactions'
const Details = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state=> state.singleProduct)
    const {image} = product
    console.log(product)
    useEffect(()=>{
        getProductById(id).then(response=>{
            dispatch(selectedProduct(response.data))
        }).catch(error=>{
            console.log('product not found')
        })
        return () =>{
            dispatch(removeSelectedProduct())
        } 
        
    },[])
  return (
    <div>
        {
            image ? 
            
                     (
                         <img src={image} alt="" width={85} height={105} />
     
                     ):
                     <h1>loading...</h1>
        }
        
        
    </div>
  )
}

export default Details