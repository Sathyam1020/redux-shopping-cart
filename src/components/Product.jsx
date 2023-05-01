import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';
import "./Product.css"

const Product = ({post}) => {
 
  const {cart} = useSelector((state) => state); 
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post))
    toast.success("Item added to Cart")
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart")
  }

  return (
    <div className='flex flex-col items-center justify-between gap-3 p-4 mt-10 ml-5 transition duration-300 ease-in rounded-lg container1 hover:scale-110'>

      <div className='mt-1 font-semibold text-gray-700 truncate text-md w-50'>
        <p>{post.title.split(" ").slice(0, 3).join(" ") + "..."}</p>
      </div>

      <div>
        <p className='w-50 text-gray font-normal text-[12px] text-left'>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>

      <div className='h-[180px]'>
        <img src={`${post.image}`} alt='pic' className='w-full h-full'/>
      </div>

      <div className='flex flex-row items-center justify-between w-full gap-1 mt-5'>
        <div className=''>
          <p className='font-semibold text-green-600'>${post.price}</p>
        </div>

        <button>
          {
            cart.some((p) => p.id == post.id) ? 
            (
              <button className='p-1 text-red-700 border-2 border-red-700 rounded-full text-[12px] px-3 hover:text-white hover:bg-red-700 transition-all duration-200' onClick={removeFromCart}>Remove Item</button>
            ) : 
            (
              <button className='p-1 text-gray-700 border-2 border-gray-700 rounded-full text-[12px] px-3 hover:text-white hover:bg-gray-700 transition-all duration-200' onClick={addToCart}>Add Item</button>
            )
          }
        </button>
      </div>


    </div>
  )
}

export default Product;