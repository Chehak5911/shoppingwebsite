import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

function Cart() {

  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ?
          (<div>

            <div>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }

            </div>

          <div className='flex flex-col items-center'>
            <div className="flex flex-col items-center">
              <div className=''>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Itmes: {cart.length}</span>
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <p>Total Amount: ${totalAmount} </p>
              <button>Checkout Now</button>
            </div>
          </div>

          </div>) :

          (
            <div className='flex flex-col items-center'>
              <h1 className='font-bold text-3xl'>Your Cart is Empty</h1>
              <br />
              <NavLink to='/'>
                <button  className="text-gray-700 border-2 border-gray-700 rounded-full font-bold 
          text-[20px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">Shop Now</button>
              </NavLink>
            </div>
          )
      }

    </div>
  )
}

export default Cart;