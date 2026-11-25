import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from './Data'
export default function Products() {
 let category_name = useParams().category_name
 let filtered_products = products.filter((p)=>p.category == category_name)
 let products_ui = filtered_products.map((product)=> {
return <div className='flex flex-col gap-1 w-60 text-center align-middle content-center'>
    <img src={product.thumbnail} className='w-full aspect-square ' alt="" />
   <div> <span className='line-through'>{product.price} </span> <span className='text-red-500'>-{product.discountPercentage}%</span>
   </div>
    <span>{Math.round(product.price - (product.price * product.discountPercentage /100))}.00</span>
</div>})
 console.log(filtered_products) 
    return (
    <div>{category_name}
    <div className='flex mx-auto w-11/12 flex-wrap text-center align-middle content-center'>
        {products_ui}
        </div></div>
  )
}