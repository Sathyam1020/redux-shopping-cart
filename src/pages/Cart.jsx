import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

  //* Getting the cart from the slice using useSelector:
  const {cart} = useSelector((state) => state);
  console.log(cart)
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount( cart.reduce((acc, curr) => acc + curr.price, 0) );
  }, [cart])

  return (
    <div className='max-w-6xl mx-auto'>

      <div>
        {
          cart.length > 0 ? (
            <div className='flex justify-evenly'>

              <div className='w-1/2'>
                {
                  cart.map((item, index) => {
                    return (
                      <CartItem key={item.id} item={item} itemIndex={index}/>
                    )
                  })
                }
              </div>

              <div>


                <div className='w-1/2'>
                  <div>Your Cart</div>
                  <div>Summary</div>
                  <p>
                    <span>Total Items: {cart.length}</span>
                  </p>
                </div>

                <div>
                  <p>Total Amount: {totalAmount}</p>
                </div>
              </div>
           </div>
          ) : (
          <div className='flex flex-col items-center justify-center mx-auto w-vw'>
            <h1>Cart Empty</h1>
            <Link to='/'>
              <button className='px-3 py-1 text-white bg-green-700 rounded-md'>Shop Now</button>
            </Link>
          </div>
          )
        }
      </div>

    </div>
  )
}

export default Cart;