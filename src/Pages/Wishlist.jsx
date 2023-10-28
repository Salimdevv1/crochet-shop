import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2'


export default function Wishlist({addToWishlist , getWishlist , removeFromCart ,quantity ,wishQuantity ,setWishQuantity ,getCart , addCart ,setQuantity}) {
    function getWishlist() {
        const localWishlist = localStorage.getItem("wishlist");
        if (localWishlist == null) {
            localStorage.setItem("wishlist", "[]");
            return []; 
        }
        return JSON.parse(localWishlist);
      }
    const [wishlist, setWishlist] = useState(
        JSON.parse(localStorage.getItem('wishlist')) || []
    );
    const clearWishlist = () => {
        setWishQuantity(0)
        window.location.reload();
        setWishlist([]);
        localStorage.removeItem('wishlist');
    };
    const addToCart=(id, name, img, price)=>{
      addCart(id, name, img, price)
      setQuantity(parseInt(quantity)+1)
      Swal.fire(
        'Good job!',
        name +'add to cart!',
        'success'
      )
    }
  const items =  getWishlist()

  return (
    <div>
        <br />
        {items != "" ? (
        <>
        <h2 style={{textAlign :"center" , marginTop :20 , fontSize : 35}}>Shopping Cart : </h2> 
        <center><div className='titles'>
          <p>Product</p>
          <p>Total</p>
        </div> </center>
        </>
      ):null}  
    {items!=""? items.map((e)=>(
            <center><div style={{width : "94%" }} >
            <div className='container'>  
              <div className='cart-info' >
                <div className='img'>
                  <img src={e.img} alt="" style={{objectFit :"cover"}} />
                </div>
                <div className='details'>
                  <p style={{fontWeight :"bold"}}>{e.name}</p>
                  <p>{e.price}.00 TND</p>
                </div>
              </div>
                <div className='total-price'>
                  <p>{e.price}.00 TND</p>
              </div>
              <div>
                  <button className='remove-item'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg></button>
                  <button className='cart-add' style={{marginLeft :20}} onClick={()=>addToCart(e.id , e.name , e.img ,e.price)}>Add To Cart</button>
              </div>
          </div> 
        </div></center>
    )): (
        <div className='cart-empty'>
        <h2 style={{textAlign :"center" , marginTop :20 , fontSize : 50}}>Your Wishlist Is Empty</h2>
        <img src="../img/empty-wishlist.png" alt="" />
        <Link to="/" style={{textDecoration :"none" , color :"black"}}><button className='continue'>Contine Shopping</button></Link>
        </div>
    )}
    {items !="" ? (
         <div className='clear'>
          <button className='clear-prod' onClick={clearWishlist}>Clear All</button>
         </div>
      ) : null}

    <br /><br />
    </div>
  )
}
