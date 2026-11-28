
import React from 'react'
import { products } from './Data'
import { Link } from 'react-router-dom'

export default function Categories() {

    let categories_list = []

    products.map((p) => {
        if (categories_list.findIndex(
            (cat) => cat.category_name == p.category
        ) == -1) {

            categories_list.push({
                "category_name": p.category,
                "img_src": p.thumbnail
            })
        }
    })

    let ui = categories_list.map((c) => {
        return (
            <Link
                key={c.category_name}
                to={"/products/" + c.category_name}
                className="group bg-white rounded-2xl shadow-md
                hover:shadow-2xl hover:-translate-y-2
                transition duration-300 overflow-hidden"
            >

                <div className="flex flex-col items-center p-5 gap-4">

                    <p className="text-xl font-bold text-gray-800
                    capitalize group-hover:text-blue-600
                    transition">
                        {c.category_name}
                    </p>

                    <img
                        src={c.img_src}
                        alt={c.category_name}
                        className="w-full h-48 object-contain
                        group-hover:scale-110 transition duration-300"
                    />

                    <span className="bg-blue-600 text-white
                    font-semibold px-6 py-2 rounded-lg
                    group-hover:bg-indigo-700 transition">
                        View Details →
                    </span>

                </div>

            </Link>
        )
    })

    console.log(categories_list)

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-3xl md:text-4xl font-extrabold
                text-gray-900 text-center mb-3">
                    Explore Categories
                </h1>

                <p className="text-gray-500 text-center mb-10">
                    Discover products from your favorite categories
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2
                md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {ui}

                </div>

            </div>

        </div>
    )
}
