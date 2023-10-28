import React from 'react'
import { useState  } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Swal from 'sweetalert2'
import 'flowbite';
import Footer from '../Pages/Footer'
import Order from '../Pages/Order'
import Products from '../../public/products.json'

export default function Test({getCart , addCart ,handleStateChange ,addToWishlist ,getWishlist ,wishQuantity ,setWishQuantity}) {
  const items = getCart()
  const navigate = useNavigate()
  const urlParams = new URL(window.location.href).searchParams;
  const productID = urlParams.get('id');
  const pushToCart = (id, name, img, price) =>{
    addCart(id, name, img, price)
    handleStateChange ()
    Swal.fire({
      title: name + " added to cart!",
      icon: 'success',
      showDenyButton: true,
      confirmButtonText: 'Contiue Shopping',
      denyButtonText: 'Checkout',
    }).then((result) => {
      if (result.isConfirmed) {
      } else if (result.isDenied) {
        navigate("/checkout")
      }
    })  
  }
  function getWishlist() {
    const localWishlist = localStorage.getItem("wishlist");
    if (localWishlist == null) {
        localStorage.setItem("wishlist", "[]");
        return []; 
    }
    return JSON.parse(localWishlist);
  } 
  function addToWishlist(id, name, img, price) {
    let localWishlist = getWishlist();
    localWishlist.push({"id": id, "name": name, "img": img, "price": price}); 
    localStorage.setItem("wishlist", JSON.stringify(localWishlist));
  }
  const addItemToWish =()=>{
    setWishQuantity(parseInt(wishQuantity)+ 1)
  }
  const addWishlist =(id, name, img, price)=>{
    addToWishlist(id, name, img, price)
    addItemToWish()
    Swal.fire({
      title: name + " added to wishlist!",
      icon: 'success',
      showDenyButton: true,
      confirmButtonText: 'Contiue Shopping',
      denyButtonText: 'Wishlist',
    }).then((result) => {
      if (result.isConfirmed) {
      } else if (result.isDenied) {
        navigate("/wishlist")
      }
    }) 
  }
  const [produit , setProduit] = useState(Products[productID])
  return (
    <div>
        <br />
        <br />
    {produit ? (
      <div className='productDetails' key={produit.id}>
        <center><div className='productImg'>
        <img  className='image' src={produit.productImg} alt="" />
      </div></center>
      <div className='prod-details'>
        <h2 className='prod-name'>{produit.productTitle}</h2>
        <p className='price'>{produit.productPrice} TND</p>
        <div className='product-availability'>
        <box-icon name='check'></box-icon>
        <p style={{color :"green" , fontWeight :"bold" , fontSize: 20}}> In Stock </p>
        </div>
        <h3>Product Details : </h3>
        <p className='prod-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam fuga. Suscipit adipisci placeat atque excepturi blanditiis esse ut pariatur tempora corrupti veritatis ea rerum, officiis, magni possimus, odio dignissimos.</p>
        <div className='final-part'>
          <button className='cart-add' onClick={()=>pushToCart(produit.id , produit.productTitle , produit.productImg ,produit.productPrice)}>Add To Cart</button>
          <button className='wishlist-button' onClick={()=>addWishlist(produit.id , produit.productTitle , produit.productImg ,produit.productPrice)}><box-icon name='heart' ></box-icon></button>
        </div>
      </div>
    </div>) 
        :(<p style={{textAlign :"center" , fontSize : 40}}>Product not found</p>)}
    <br />
    <br />
    <Footer></Footer>
    </div>
  )
}
