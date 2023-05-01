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
    <div>

        <div>
            <img src={item.image} alt='ItemImage'/>
        </div>

        <div>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>

            <div>
                <p>{item.price}</p>
                <div>
                    <AiFillDelete onClick={removeFromCart}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CartItem;