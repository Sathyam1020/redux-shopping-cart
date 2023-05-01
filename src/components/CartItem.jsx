import React from 'react'
import { toast } from 'react-hot-toast';
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice';

const CartItem = ({item, itemIndex}) => {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from Cart")
    }
  return (
    <div className='flex items-center justify-between gap-3 p-4 mt-10 ml-5 border-b-2 border-gray-300 rounded-lg'>

        <div className='h-[180px] p-4'>
            <img src={item.image} alt='ItemImage' className='object-contain w-full h-full'/>
        </div>

        <div className='w-3/4'>
            <h1 className='mt-1 font-semibold text-gray-700 text-md'>{item.title}</h1>
            <h1 className='mt-3 text-gray font-normal text-[12px] text-left'>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>

            <div className='flex justify-between mt-4'>
                <p className='font-semibold text-green-600'>${item.price}</p>
                <div>
                    <AiFillDelete onClick={removeFromCart} className='cursor-pointer'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CartItem;