import React from 'react'
import CounterProvider from './component/Countercontext'
import Counter from './component/Counter'
import CartProvider from './component/Cartcontext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Cart from './component/Cart'

function App() {
  return (
    <>

      { /*<CounterProvider>
    <Counter/>
   </CounterProvider>*/}


      <CartProvider>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>


      </CartProvider>



    </>
  )
}

export default App
