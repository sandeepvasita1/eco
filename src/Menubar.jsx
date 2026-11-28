
import React from 'react'
import { Link } from 'react-router-dom'

export default function Menubar() {
    return (
        <nav className="bg-gradient-to-r from-blue-700 to-indigo-700
        text-white px-6 py-4 shadow-xl sticky top-0 z-50">

            <div className="container mx-auto flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl md:text-3xl font-extrabold
                tracking-wide">
                    My<span className="text-yellow-300">Website</span>
                </h1>

                {/* Navigation Links */}
                <ul className="flex items-center gap-3 md:gap-8">

                    <li>
                        <Link
                            to="/"
                            className="px-3 py-2 rounded-lg font-semibold
                            hover:bg-white hover:text-blue-700
                            transition duration-300"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/products"
                            className="px-3 py-2 rounded-lg font-semibold
                            hover:bg-white hover:text-blue-700
                            transition duration-300"
                        >
                            Products
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/buynow"
                            className="bg-yellow-400 text-gray-900
                            px-4 py-2 rounded-lg font-bold
                            hover:bg-yellow-300 hover:scale-105
                            transition duration-300 shadow-md"
                        >
                            🛒 My Cart
                        </Link>
                    </li>

                </ul>

            </div>
        </nav>
    )
}
