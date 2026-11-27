
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from './Data'
import Gallery from './Galary'
import AddtoCart from './assets/AddtoCart'
export default function ProductDetails() {

    let id = useParams().id

    let filtered_product = products.filter((p) => p.id == id)

    let product_ui = filtered_product.map((product) => {

        return (
            <div key={product.id} className='w-11/12 mx-auto mt-10 p-5 shadow-lg'>

                <div className='flex flex-col md:flex-row gap-8'>

                    <Gallery product={product} />

                    <div className='md:w-1/2 flex flex-col gap-3'>
                    <p className='bg-red-400 w-45 text-black p-2 rounded font-bold text-3xl'>
                             {product.category}
                        </p>

                        <h1 className='text-3xl font-bold underline text-blue-600'>
                            {product.title}
                        </h1>

                        <p>{product.description}</p>

                        

                        <p>Brand: {product.brand}</p>

                        <p>Rating: {"⭐".repeat(Math.floor(product.rating))}
                            { "☆".repeat(5 - Math.floor(product.rating))}({product.rating.toFixed(1)})</p>

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
                        <div className='flex gap-4 mt-4'>

    <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <AddtoCart id={product.id}></AddtoCart>
          </div>

    <Link
        to='/checkout'
        className='bg-black-600  text-black p-3 rounded text-center font-bold w-1/2'
    >
        Buy Now
    </Link>

</div>

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
