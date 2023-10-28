import React from 'react'
import 'boxicons'
import Cart from './Cart'
import  {useState} from 'react'
import Menu from './Menu'
import Hero from './Hero'
import Feedback from './Feedback'
import Footer from './Footer'
import Category from './Category'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Navbar({quantity}) {
 
  
    const [show, setShow] = useState(false);
    const handleClick = () => {
      setVisible(false)
    }
   
    const [visible , setVisible] = useState(false)
  return (
    <div >
      <header className='container1'>
        <Link to="/" style={{textDecoration :"none"}}><div className='title'>
            T ' Shop
        </div></Link>
        <div className='salimdev'>
          <div className='nav-link'>
           <Link to="/" style={{textDecoration :"none"}}><a href="">Home</a></Link> 
            <AnchorLink href='#footer'><a href="" style={{textDecoration :"none"}} className='link'>About Us</a></AnchorLink>
            <Link to="/contact" style={{textDecoration :"none"}}><a href="">Contact</a></Link>
          </div>
          <div className='mobile'>
          <div className='cart'>
            <Link to="/cart"><button className='cart-shop'><box-icon name='cart'></box-icon></button></Link>
            <div className='nav-cart-count'>{quantity}</div>
          </div>
          <div className='menu'>
            <button onClick={()=>setVisible(true)} className='menulist-btn'>
            <box-icon name='list-ul'></box-icon>
        </button>
        </div>
        </div>
        </div>
        <div style={{display :"none"}} >
          <Menu visible={visible} setVisible={visible} handleClick={handleClick}></Menu>
        </div>
        
        </header>
     
    </div>
  )
}
