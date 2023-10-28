import React, { useState , useEffect } from 'react'
import Navbar from './Pages/Navbar'
import Hero from './Pages/Hero'
import Category from './Pages/Category'
import Cart from './Pages/Cart'
import Footer from './Pages/Footer'
import Feedback from './Pages/Feedback'
import Contact from './Pages/Contact'
import CategoryPage from './ProductsPages/CategoryPage'
import { Route , Routes } from 'react-router-dom'
import ProductPage from './ProductsPages/ProductPage'
import Order from './Pages/Order'
import Header from './Pages/Header'
import Wishlist from './Pages/Wishlist'

export default function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const  [quantity , setQuantity] = useState(
    localStorage.getItem("quantity") || 0 ,
  )
  const [wishQuantity , setWishQuantity ] = useState(
    localStorage.getItem("wishquantity") || 0 ,
  )
  const handleStateChange = () => {
    setQuantity(parseInt(quantity)+ 1);
  };
  const addItemToWish =()=>{
    setWishQuantity(parseInt(wishQuantity)+ 1)
  };
  const clearQuantity= ()=>{
    setQuantity(0)
  };
  function getCart() {
    const localCart = localStorage.getItem("cart");
    if (localCart == null) {
        localStorage.setItem("cart", "[]");
        return []; 
    }
    return JSON.parse(localCart);
  } 
  const removeFromCart = (deletedItem) => {
    const itemToDelete = deletedItem.cartID;
    let cart = getCart();
    console.log(cart);
    const updatedCart = cart.filter(item => item.cartID !== itemToDelete); // Use strict equality here (===)
    setCart(updatedCart);
    console.log(updatedCart);
    setQuantity(parseInt(quantity) - 1);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  function addCart(id, name, img, price) {
      let localCart = getCart();
      localCart.push({"id": id, "name": name, "img": img, "price": price ,"cartID" :Date.now()}); 
      localStorage.setItem("cart", JSON.stringify(localCart));
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
  useEffect(() => {
    localStorage.setItem('quantity', quantity);
    localStorage.setItem ('wishquantity' ,  wishQuantity)
  }, [quantity , wishQuantity]);

  return (
    <div>
      <div className='section-container'>
      <Header quantity={quantity} setQuantity={setQuantity} setWishQuantity={setWishQuantity} wishQuantity={wishQuantity} ></Header>
      </div>
      <Routes>
        <Route path='/cart' element={<Cart removeFromCart={removeFromCart} getCart={getCart} addCart={addCart}  quantity={quantity}  addToWishlist={addToWishlist} getWishlist={getWishlist} setQuantity={setQuantity} clearQuantity={clearQuantity}  />}></Route>
        <Route path='/product' element={<ProductPage  getCart={getCart} addCart={addCart }  addToWishlist={addToWishlist} getWishlist={getWishlist} handleStateChange={handleStateChange}setWishQuantity={setWishQuantity} wishQuantity={wishQuantity}    />}></Route>
        <Route path='/category' element={<CategoryPage   getCart={getCart} addCart={addCart} quantity={quantity} setQuantity={setQuantity} addToWishlist={addToWishlist} getWishlist={getWishlist} setWishQuantity={setWishQuantity} wishQuantity={wishQuantity}  />} ></Route>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/wishlist' element={<Wishlist addToWishlist={addToWishlist} getWishlist={getWishlist} removeFromCart={removeFromCart} clearQuantity={clearQuantity} setWishQuantity={setWishQuantity} wishQuantity={wishQuantity} getCart={getCart} addCart={addCart } quantity={quantity} setQuantity={setQuantity}    />}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/checkout' element={<Order clearQuantity={clearQuantity} quantity={quantity} setQuantity={setQuantity}   />}></Route>
      </Routes>
      <div id='footer' style={{display :"none"}}>
      <Footer></Footer>
      </div>
    </div>
  )
}
