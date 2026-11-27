
import { useState } from 'react'
import './App.css'
import Categories from './Categories'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Menubar from './Menubar'
import Productdetail from './Productdetail'
import { CartContext } from './assets/CartContext'

function App() {

  const [cart, setcart] = useState([])

  return (
    <>
      <CartContext.Provider value={{ cart: cart, setcart: setcart }}>

        <Menubar />

        <Routes>
          <Route path="/" element={<Categories />} />

          <Route path="/products/:category_name" element={<Products />} />

          <Route path="/product/:id" element={<Productdetail />} />

          <Route path="/products" element={<Products />} />

        </Routes>

      </CartContext.Provider>
    </>
  )
}

export default App
