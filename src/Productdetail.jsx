
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from './Data'
import Gallery from './Galary'

export default function ProductDetails() {

    let id = useParams().id

    let filtered_product = products.filter((p) => p.id == id)

    let product_ui = filtered_product.map((product) => {

        return (
            <div key={product.id} className='w-11/12 mx-auto mt-10 p-5 shadow-lg'>

                <div className='flex flex-col md:flex-row gap-8'>

                    <Gallery product={product} />

                    <div className='md:w-1/2 flex flex-col gap-3'>

                        <h1 className='text-3xl font-bold'>
                            {product.title}
                        </h1>

                        <p>{product.description}</p>

                        <p>Category: {product.category}</p>

                        <p>Brand: {product.brand}</p>

                        <p>Rating: {product.rating}</p>

                        <p>Stock: {product.stock}</p>

                        <p>
                            Original Price: ₹{product.price}
                        </p>

                        <p className='text-red-500'>
                            Discount: {product.discountPercentage}%
                        </p>

                        <h2 className='text-2xl font-bold text-green-600'>
                            Final Price: ₹
                            {Math.round(product.price -
                            (product.price * product.discountPercentage / 100))}
                        </h2>

                        <Link
                            to='/'
                            className='bg-blue-600 text-white p-3 rounded text-center'
                        >
                            Back to Home
                        </Link>

                    </div>

                </div>

            </div>
        )
    })

    return (
        <div>
            {product_ui.length > 0 ? product_ui : <h2>Product Not Found</h2>}
        </div>
    )
}
