
import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./Data";

export default function Products() {

    let category_name = useParams().category_name;

    let filtered_products;

    if (!category_name) {
        filtered_products = products;
    }
    else {
        filtered_products = products.filter(
            (p) => p.category == category_name
        );
    }

    let products_ui = filtered_products.map((product) => {

        let final_price = Math.round(
            product.price -
            (product.price * product.discountPercentage / 100)
        );

        return (
            <div key={product.id}
                className="bg-white rounded-xl shadow-md p-4
                hover:shadow-xl hover:-translate-y-1
                transition duration-300">

                <img
                    src={product.thumbnail}
                    className="w-full h-48 object-contain"
                />

                <h2 className="font-bold text-lg mt-3">
                    {product.title}
                </h2>

                <div className="flex justify-between mt-3">
                    <span className="text-gray-500 line-through">
                        ₹{product.price}
                    </span>

                    <span className="text-red-500 font-semibold">
                        {product.discountPercentage}% OFF
                    </span>
                </div>

                <h3 className="text-xl font-bold text-green-700 mt-2">
                    ₹{final_price}
                </h3>

                <Link to={`/product/${product.id}`}
                    className="block bg-blue-600 text-white
                    text-center py-2 rounded-lg mt-4
                    hover:bg-blue-800 transition">

                    View Details

                </Link>

            </div>
        );
    });

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Products
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 lg:grid-cols-4 gap-6">

                {products_ui}

            </div>

        </div>
    );
}
