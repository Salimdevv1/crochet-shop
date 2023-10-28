import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Test from './ProductPage'
import Swal from 'sweetalert2'
import 'flowbite';
import Footer from '../Pages/Footer';
import Cart from '../Pages/Cart'
import Products from '../../public/products.json'
import categories from '../../public/category.json'

export default function Plushies({getCart , addCart , totalItems , quantity , setQuantity}) {
  const [products , setProducts] = useState(Products)
  const urlParams = new URL(window.location.href).searchParams;
  const categoryID = urlParams.get('id');
  const [category , setCategory] = useState(categories[categoryID])
  const filteredProducts = [];
  for (const key in Products) {
    if (Products[key].category === categoryID) {
        filteredProducts[key] = Products[key];
    }
  }
  const pushToCart = (id, name, img, price) =>{
    addCart(id, name, img, price)
    addquantity()
    setQuantity(parseInt(quantity)+ 1)
    Swal.fire({
      title: name + " added to cart!",
      icon: 'success',
      showDenyButton: true,
      confirmButtonText: 'Contiue Shopping',
      denyButtonText: 'Checkout',
    }).then((result) => {
      if (result.isConfirmed) {
      } else if (result.isDenied) {
        window.location.href = "/checkout";
      }
    })  
  }
  function getQuantity() {
    const localquantity = localStorage.getItem("quantity");
    if (localquantity == null) {
        localStorage.setItem("quantity", quantity);
        return quantity; 
    }
    return localquantity;
} 
function addquantity() {
    let localquantity = getCart();
    localquantity.push(quantity); 
    localStorage.setItem("quantity", (localquantity));
}
    return (  
    <div className='plush-cont'>
      <center><div className='categ-title'>
        <h2 style={{textAlign :"center" , paddingTop : 14}}>
        {category.categoryTitle}
        </h2>
        <p>{category.categoryDescription}</p>
      </div></center>
      <center><div className='plushies-container'>
        {filteredProducts.map((e)=>(  
        <div className='prod-info'>
        <Link to={`/product?id=${e.id}`} style={{textDecoration :"none" , color :"black"}}>
          <img src={e.productImg} alt={e.productTitle} title={e.productTitle} /></Link>
          <p className='prod-title'>{e.productTitle}</p>
          <p className='prod-price'>{e.productPrice} TND</p>
          <div style={{display :"flex" , alignItems :"center" , justifyContent :"center" , gap :20}}>
          <button className='cart-add cart'onClick={()=>pushToCart(e.id , e.productTitle , e.productImg ,e.productPrice)}>Add To Cart</button>
          </div>
        </div>
        ))} 
      </div></center>
      <br/>
      <br/>
      <Footer></Footer>
    </div>
  )
}
