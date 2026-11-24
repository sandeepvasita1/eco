import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Categories from './Categories'

function App() {
return(<>
<h1 className='bg-amber-600'>Ecommerce project</h1>
<Categories></Categories>
</>)  
}

export default App