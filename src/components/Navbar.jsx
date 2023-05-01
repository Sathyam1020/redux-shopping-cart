import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Icon from "../favicon.png"
const Navbar = () => {

  const {cart} = useSelector((state) => state)
  
  return (
    <div>
      <nav className='flex items-center justify-between max-w-6xl mx-auto h-2xl'>
       
       <NavLink to='/'>
         <div className='ml-5'>
           <img src={Icon} alt='Icon' height='30px' width='60px'/>
         </div>
       </NavLink>
       
        <div className='flex items-center mr-5 space-x-6 font-medium text-slate-100'>
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>
          
          <NavLink to='/cart'>
            <div className='relative'>
              <FaShoppingCart className='text-2xl'/>
              {
                cart.length > 0 &&
                <span className='absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-green-600 rounded-full -top-1 -right-2 animate-bounce'>{cart.length}</span>
              }
            </div>
          </NavLink>
         
        </div>

      </nav>
    </div>
  )
}

export default Navbar;