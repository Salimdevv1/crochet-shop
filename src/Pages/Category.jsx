import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Db from '../../public/category.json'
import 'flowbite';


export default function Category() {
  const [db , setDb] = useState(Db)
  return (
    <div>
      <section className='categories'>
        <div className='container2'>
            <center><div className='categories-title'>
               <h2 style={{fontSize : 40}}>Categories</h2>
            </div></center>
        </div>
        <br />
        <div className='categories-container'>
          <Link to="/category?id=plushies" style={{textDecoration :"none" , color :"black"}}><div className='box1'>
            <img src="../img/plushies.png" alt="" className='categ-img' />
            <p style={{marginTop : 10 , fontWeight :"bold" , fontSize : 19}}>Plushies</p>
          </div></Link>
          <Link to="/category?id=bags" style={{textDecoration :"none" , color :"black"}}>
          <div className='box1' style={{textDecoration :"none" , color :"black"}}>
            <img src="../img/bags.png" alt="" className='categ-img' />
            <p style={{marginTop : 10 , fontWeight :"bold" , fontSize : 19}}>Bags</p>
          </div></Link>
          <Link to="/category?id=cushion" style={{textDecoration :"none" , color :"black"}}>
          <div className='box1'  style={{textDecoration :"none" , color :"black"}}>
            <img src="../img/cushion.jpg" alt="" className='categ-img' />
            <p style={{marginTop : 10 , fontWeight :"bold" , fontSize : 19}}>Cushion</p>
          </div></Link>
          <Link to="/category?id=accessory" style={{textDecoration :"none" , color :"black"}} >
          <div className='box1' style={{textDecoration :"none" , color :"black"}}>
            <img src="../img/accessory.png" alt="" className='categ-img' />
            <p style={{marginTop : 10 , fontWeight :"bold" , fontSize : 19 , textAlign :"center"}}>Accessory</p>
          </div>
          </Link>
          <Link  to="/category?id=tops"  style={{textDecoration :"none" , color :"black"}} >
          <div className='box1' style={{textDecoration :"none" , color :"black"}}>
            <img src="../img/tops.png" alt="" className='categ-img' />
            <p style={{marginTop : 10 , fontWeight :"bold" , fontSize : 19}}>Tops</p>
          </div></Link>
          <Link  to="/category?id=caps" style={{textDecoration :"none" , color :"black"}}>
          <div className='box1' style={{textDecoration :"none" , color :"black"}}>
            <img src="../img/cap.png" alt=""  className='categ-img'/>
            <p style={{marginTop : 10 , fontWeight :"bold" , fontSize : 19}}>Cap</p>
          </div></Link>

        </div>
      </section>
    </div>
  )
}
