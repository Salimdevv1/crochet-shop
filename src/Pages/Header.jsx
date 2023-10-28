import React  , {useState}from 'react'
import { Link } from 'react-router-dom'
import 'flowbite';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Header({quantity , wishQuantity}) {
    const [visible , setVisible] = useState(false)
    const handleClick = () => {
        setVisible(false)
      }
     
  return (
    <div>
      
<nav class="" id='navbar'>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
  <Link to="/" style={{textDecoration :"none"}}><a href="" class="flex items-center" style={{textDecoration :"none"}} >
      <span class="self-center font-semibold " id='title'>T ' Shop</span>
  </a></Link>
  <div class="flex md:order-2">
      <Link to="/wishlist" id='wishlist'>{wishQuantity >0 ? (<box-icon type='solid' name='heart'></box-icon>):<box-icon name='heart' ></box-icon>}</Link>
      {/* <div className='nav-wishlist-count'>{wishlistItemsQuantity}</div> */}
      <Link to="/cart"><button type="button" class="text-black font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0" id='cart-shop'><img src="/img/cart.png" alt=""  /></button></Link>
      <div className='nav-cart-count'>{quantity}</div>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium   md:flex-row md:space-x-8 md:mt-0 md:border-0">
      <li>
        <Link to="/" style={{textDecoration :"none"}}><a href="#" class="block py-2 pl-3 pr-4" aria-current="page" id='nav-link'>Home</a></Link>
      </li>
      <li>
        <AnchorLink href="#footer" style={{textDecoration :"none"}}><a href="#" class="block py-2 pl-3 pr-4" id='nav-link'>About</a></AnchorLink>
      </li>
      <li>
        <Link to="/contact" style={{textDecoration :"none"}}><a href="#" class="block py-2 pl-3 pr-4" id='nav-link'>Contact</a></Link>
      </li>
    </ul>
  </div>
  </div>
</nav>


    </div>
  )
}
