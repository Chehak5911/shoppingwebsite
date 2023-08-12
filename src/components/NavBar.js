import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function NavBar() {
  return (
    <nav className='flex justify-between items-center h-20 mx-auto max-w-6xl'>
      <NavLink to="/">
        <img src='https://cdn2.vectorstock.com/i/1000x1000/31/56/amazon-logo-vector-39773156.jpg' width='50px' className='ml-5' />
      </NavLink>

      <div className='flex item-center font-medium mr-5 text-slate-100 space-x-6'>

        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to='/cart'>
          <FaShoppingCart />
        </NavLink>


      </div>

    </nav>
  )
}

export default NavBar; 