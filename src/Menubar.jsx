
import React from 'react'
import { Link } from 'react-router-dom'

export default function Menubar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          MyWebsite
        </h1>

        <ul className="flex items-center gap-8">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 font-medium transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/products"
              className="hover:text-yellow-300 font-medium transition"
            >
              Products
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  )
}