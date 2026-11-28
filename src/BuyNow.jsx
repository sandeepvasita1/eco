
import React, { useContext } from "react";
import { CartContext } from "./assets/CartContext";
import { products } from "./Data";

export default function BuyNow() {

    const { cart } = useContext(CartContext);

    let cart_ui = cart.map((item) => {

        let product = products.find((p) => p.id == item.id);

        if (!product) return null;

        let final_price = Math.round(
            product.price -
            (product.price * product.discountPercentage / 100)
        );

        let total_price = final_price * item.quantity;

        return (
            <div key={item.id}
                className="bg-white rounded-xl shadow-md p-5
                flex flex-col sm:flex-row items-center gap-6">

                {/* Product Image */}
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-32 h-32 object-contain"
                />

                {/* Product Details */}
                <div className="flex-1">

                    <h2 className="text-xl font-bold text-gray-900">
                        {product.title}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Category: {product.category}
                    </p>

                    <p className="text-green-700 font-bold mt-2">
                        Price: ${final_price}
                    </p>

                    <p className="text-gray-700 mt-2">
                        Quantity: {item.quantity}
                    </p>

                </div>

                {/* Total Price */}
                <div className="text-xl font-bold text-blue-700">
                    ${total_price}
                </div>

            </div>
        );
    });

    let grand_total = cart.reduce((total, item) => {

        let product = products.find((p) => p.id == item.id);

        if (!product) return total;

        let price = Math.round(
            product.price -
            (product.price * product.discountPercentage / 100)
        );

        return total + (price * item.quantity);

    }, 0);

    return (

        <div className="min-h-screen bg-gray-100 p-6">

            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                My Cart
            </h1>

            <div className="max-w-5xl mx-auto flex flex-col gap-5">

                {cart.length > 0 ? cart_ui :

                    <p className="text-center text-xl text-gray-500">
                        Your Cart is Empty!
                    </p>

                }

                {cart.length > 0 &&

                    <div className="bg-white rounded-xl shadow-md p-6">

                        <h2 className="text-2xl font-bold text-gray-900">
                            Grand Total
                        </h2>

                        <p className="text-3xl font-bold text-green-700 mt-3">
                            ${grand_total}
                        </p>

                    </div>

                }

            </div>

        </div>
    );
}
