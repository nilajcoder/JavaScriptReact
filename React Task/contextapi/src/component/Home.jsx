import React from 'react'
import { useCart } from './Cartcontext'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const {addtocart}=useCart();
    const navigate = useNavigate();

    const product=[
        {id:1,name:"Phone"},
        {id :2,name:"Laptop"},
        {id:3,name:"Tab"}
    ];

      const handleAddToCart = (item) => {
    addtocart(item);         
    navigate('/cart');       
  };
  return (
    <div>


     {product.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
        </div>
      ))}


      
    </div>
  )
}

export default Home
