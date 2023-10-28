import React from 'react'
import Feedback from './Feedback'
import Category from './Category'
import Footer from './Footer'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AboutCrochet from './AboutCrochet'
import { useEffect } from 'react'
import 'flowbite';
import Aos from 'aos'
import "aos/dist/aos.css"


export default function Hero() {
  useEffect(()=>{
    Aos.init({duration : 1800})
  })
  return (
    <div>
      <br />
      <section className='hero'>
            <div className='intro'>
                <p>Discover the artistry of crochet with our brand, where creativity intertwines with craftsmanship. 
                    We offer a curated selection of 
                    premium crochet supplies, ensuring every stitch you make is a masterpiece.</p>
                    <AnchorLink href='#category' className='discover-btn' style={{textDecoration :"none" , color :"black" , width : 200}} ><button className='discover-btn'>Discover</button></AnchorLink>
            </div>
            <div className='hero-logo'>
                <img src="/img/kitty-logo.png" alt="" className='kitty' />
            </div>
      </section>
      <br /><br />
      <div id='category' data-aos="fade-down">
      <Category></Category>
      </div>
      <br /><br />
      <br />
      <div data-aos="fade-right">
        <AboutCrochet/>
      </div>
      <br />
      <br />
      <div id='feedback' data-aos="fade-up">
      <Feedback></Feedback>
      </div>
      <br />
      <br />
      <Footer></Footer>
  
    </div>
  )
}
