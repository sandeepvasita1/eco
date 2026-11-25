
import React, { useState } from 'react'
import galary from './Galary'

export default function Gallery({ product }) {

    let [selected_image, setselected_image] = useState(product.thumbnail)

    let images = product.images && product.images.length > 0
        ? product.images
        : [product.thumbnail]

    return (
        <div className='md:w-1/2 flex flex-col gap-4'>

            {/* Main Image */}
            <div className='w-full h-80 border rounded p-3'>
                <img
                    src={selected_image}
                    className='w-full h-full object-contain'
                    alt={product.title}
                />
            </div>

            {/* Image Gallery */}
            <div className='flex flex-wrap gap-3 justify-center'>

                {images.map((img, index) => {

                    return (
                        <img
                            key={index}
                            src={img}
                            onClick={() => setselected_image(img)}
                            className='w-20 h-20 object-contain border rounded cursor-pointer hover:border-blue-600'
                            alt='Product Gallery'
                        />
                    )
                })}

            </div>

        </div>
    )
}
