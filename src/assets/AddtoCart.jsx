
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContext'

export default function AddtoCart({ id }) {

    const { cart, setcart } = useContext(CartContext)

    const [quantity, setquantity] = useState(0)

    // Check whether product already exists in cart
    useEffect(() => {
        const item = cart.find((e) => e.id === id)

        if (item) {
            setquantity(item.quantity)
        } else {
            setquantity(0)
        }
        // console.log(cart)
    }, [cart, id])


    // Add product to cart
    const AddItem = () => {

        const newcart = [
            ...cart,
            { id: id, quantity: 1 }
        ]

        setcart(newcart)
        setquantity(1)
    }


    // Increase quantity
    const increasequantity = () => {

        const newcart = cart.map((item) => {

            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }

            return item
        })

        setcart(newcart)
    }


    // Decrease quantity
    const decreasequantity = () => {

        const newcart = cart
            .map((item) => {

                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }

                return item
            })
            .filter((item) => item.quantity > 0)

        setcart(newcart)
    }


    return (
        <div>

            {quantity > 0 ?

                <div className="flex items-center gap-3">

                    <button
                        onClick={decreasequantity}
                        className="bg-gray-200 px-3 py-2 rounded">
                        -
                    </button>

                    <span className="font-semibold">
                        {quantity}
                    </span>

                    <button
                        onClick={increasequantity}
                        className="bg-gray-200 px-3 py-2 rounded">
                        +
                    </button>

                </div>

                :

                <button
                    onClick={AddItem}
                    className="flex-1 bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3.5 px-6 rounded-xl transition duration-300">

                    Add to cart

                </button>

            }

        </div>
    )
}