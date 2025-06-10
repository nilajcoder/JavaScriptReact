

import React, { createContext, useContext, useState } from 'react'


const cartcontext = createContext();


const CartProvider = ({ children }) => {

  const [cartitem, setItem] = useState([])


  const addtocart = (item) => {
    setItem([...cartitem, item])
  }


  const removeFromCart = (id) => setItem(cartitem.filter((item) => item.id !== id))

  return (

    <cartcontext.Provider value={{ cartitem, addtocart, removeFromCart }} >

      {children}

    </cartcontext.Provider>

  )
}


export const useCart = () => useContext(cartcontext)
export default CartProvider
