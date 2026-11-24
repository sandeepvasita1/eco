import React from 'react'
import { products } from './Data'
export default function Categories() {
    let categories_list =[]
    products.map((p)=>{
        if(categories_list.findIndex((cat)=>cat.category_name==p.category)==-1)
        {
            categories_list.push({"category_name":p.category,"img_src":p.thumbnail})
        }
    })
    let ui = categories_list.map((c)=>{
        return( 
            <a> 
<div className='flex flex-col'>
<p>{c.category_name}</p>
<img src={c.img_src} className='h-50 aspect-square'/>
View details
</div>
            </a>
       
    )})
    console.log(categories_list)
  return (
    <div>Categories
        <div className='flex gap-5'>
            {ui}

        </div>
    </div>
  )
}