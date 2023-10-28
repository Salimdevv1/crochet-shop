import React, { useState } from 'react'
import { Link, useActionData } from 'react-router-dom';
import 'flowbite';

export default function Cart({quantity , setQuantity ,clearQuantity , removeFromCart ,removeItemFromCart}) {
  function getCart() {
    const localCart = localStorage.getItem("cart");
    if (localCart == null) {
        localStorage.setItem("cart", "[]");
        return []; 
    }
    return JSON.parse(localCart);
}

  function formatCart(cartItems) {
    let totalPrice = 0;
    const itemQuantities = {};
    for (const item of cartItems) {
      totalPrice += parseInt(item.price);
      if (item.name in itemQuantities) {
        itemQuantities[item.name]++;
      } else {
        itemQuantities[item.name] = 1;
      }
    }
    let cartText = "Products :\n";
    for (const itemName in itemQuantities) {
      cartText += `x${itemQuantities[itemName]} ${itemName}\n`;
    }
    const formattedText = `${totalPrice}.00 TND`;
    return formattedText;
}
  const [cart1, setCart1] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
);
  const clearCart = () => {
    setCart1([]);
    setQuantity(0)
    localStorage.removeItem('cart');
};
  const cart= ()=>{
    setQuantity(parseInt(quantity)+ 1)
}

  const items = getCart()
  const total = formatCart(getCart())
  return (
    <div>
      <br />
      {items != "" ? (
        <>
        <h2 style={{textAlign :"center" , marginTop :20 , fontSize : 35}}>Shopping Cart : </h2> 
        <br />
        <center><div className='titles'>
          <p style={{fontSize : 22}}>Product</p>
          <p style={{fontSize : 22}}>Total</p>
        </div> <br /></center>
        </>
      ):null}  
      {items!=""? items.map((e)=>(  
        <center><div style={{width : "94%" }} >
          <div className='container'>  
            <div className='cart-info' >
              <div className='img'>
                <img src={e.img} alt="" />
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
                  <button className='' onClick={(e)=>removeFromCart(e)}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg></button>
            </div>
        </div> 
      </div></center>
      )):(
        <div className='cart-empty'>
        <h2 style={{textAlign :"center" , marginTop :20 , fontSize : 50}}>Your Cart Is Empty</h2>
        <img src="../img/empty-cart.png" alt="" />
        <Link to="/" style={{textDecoration :"none" , color :"black"}}><button className='continue'>Contine Shopping</button></Link>
        </div>
      )}
        {items !="" ? (
         <div className='clear'>
          <button className='clear-prod' onClick={clearCart}>Clear All</button>
         </div>
      ) : null}
      {items !="" ? (
         <div className='total'>
         <p>Estimated total :  {total}</p>
       <Link to="/checkout" style={{textDecoration :"none" , color :"black"}}><center><button className='proceed-checkout'>Proceed To Checkout</button></center></Link>
       </div>
      ) : null}
      <br />
      <br />
      <br />
    </div>
  )
}
