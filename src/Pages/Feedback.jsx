import React from 'react'
import 'flowbite';
import '../global.css'
export default function Feedback() {
  return (
    
    <div>
      <section className='feedback-container'>
        <h2 style={{textAlign :"center" , marginTop : 40 ,  fontSize : 40}}>FeedBack</h2>
        <p className='feedback-p'>We value your feedback! Our feedback section is your platform to share your thoughts and experiences 
          with us. Whether it's about our products, website, or any aspect of your interaction with us,
           we encourage you to reach out and help us improve. Your input is invaluable in shaping our offerings 
           to better meet your needs.</p>
        <div className='feedback-container'>
            <form action="https://airform.io/slam.salim2006@gmail.com" method="post" className='form'>
                <input className='inputField' type="text" placeholder="Name" name='name' required />
                <input className='inputField' type="email" placeholder="Email" name='email'  required />
                <input className='inputField' type="text" placeholder="Subject" name='subject' required />
                <textarea className='inputField textArea ' placeholder="Message" name='message' required></textarea>
                <button className='submit-btn'>Submit</button>
            </form>
        </div>
      </section>
    </div>
  )
}
