import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useSearchParams } from 'react-router-dom';
import 'flowbite';


function FormFloatingBasicExample({clearQuantity , setQuantity}) {
  const [delivery , setDelivery] = useState(0)
  console.log(delivery)
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
    totalPrice = totalPrice + parseInt(item.price) + delivery ;
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
  const formattedText = `${cartText} Total: ${totalPrice} TND`;
  return formattedText;
}
  const handleClick = ()=>{
    let input = document.getElementById("input").value;
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    if (input =="" || input1=="" || input2=="" || input3=="") {
      return 0
    }
    else {
      const localCart = localStorage.getItem("cart");
      localStorage.setItem("cart", "[]");
      setQuantity(0)
    }
    
  }

  const prod = formatCart(getCart())
  const items = formatCart(getCart())
   return (
    <>
    <br />
    <h2 style={{textAlign :"center" , fontSize : 40}}>Checkout</h2>
    {/* Check Out */}
    <div className='checkout-container'>
      <div className='user-information'>
        <form action="https://formspree.io/f/myyqlvpe" method="post">
          <Form.Control className='input-user' type="text" placeholder="Full Name" name='name'  required id='input' onChange={(e)=>setSalim(e.target.value)}/>
          <Form.Control className='input-user' type="email" placeholder="name@example.com"  name='email' required id='input1' />
          <Form.Control className='input-user' type="text" placeholder="Phone Number" name='phone' required id='input2' />
          <Form.Control className='input-user' type="text" placeholder="Adress" name='address' required id='input3' />
          <div className='payment-container'>
              <label htmlFor="">Paymenet Method :</label>
              <div style={{display :"flex" , alignItems :"center" , justifyContent :"flex-start" , gap :10}}>
                  <input type="radio" id="html" name="payment" value="Payment at checkout"/>
                  <label for="html">Payment at checkout</label><br></br>
              </div>
              <div style={{display :"flex" , alignItems :"center" , justifyContent :"flex-start" , gap :10}}>
                  <input type="radio" name="payment" value="Delivery" onClick={()=>setDelivery(6)}/>
                  <label > Delivery + 6 TND</label><br></br>
              </div>
          </div><br />
          <button className='checkout'onClick={handleClick} >Checkout</button>
        </form>
      </div>
      
      <div className='containerorder'>
        <h2 style={{fontSize : 40}}>Order Box : </h2>
        <center><textarea cols="30" rows="10" disabled className='order-box'>{prod}</textarea></center>
        <input name="ordereditems" value={items} hidden disabled/>  
      </div>
    </div>
    </>
  );
}

export default FormFloatingBasicExample;