import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Categories from './Categories'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Menubar from './Menubar'

function App() {
return(<>
<Menubar></Menubar>

<Routes>
    <Route path="/" element={<Categories></Categories>}></Route>
    <Route path="/products/:category_name" element={<Products></Products>}></Route>
    
</Routes>

</>)  
}

export default App