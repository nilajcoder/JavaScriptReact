import React from 'react'
import { useCart } from './Cartcontext'

const Cart = () => {

    const { cartitem, removeFromCart } = useCart()
    return (
        <div>

            {cartitem.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
              cartitem.map((item) => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))
            )}

        </div>
    )
}

export default Cart
