import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import 'flowbite';


export default function Footer() {
  return (
    <div>
      
<footer class="bg-white dark:bg-gray-900" style={{borderTop : "3px solid #FFC0CB "}}>
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://instagram.com/crochet_shoptn?igshid=MzRlODBiNWFlZA==" class="flex items-center" style={{textDecoration :"none"}}>
                  {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" /> */}
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" style={{color :"#FB557C" , fontFamily :"'Pacifico', cursive" , letterSpacing : 3,  fontSize :40}}>T ' Shop</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div style={{display :"flex" , flexDirection :"column" , alignItems :"center" , justifyContent :"center" , marginRight : 20}}>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a  style={{textDecoration :"none" , color :'#FB557C' , fontWeight :"bold" , fontSize : 18}} href="#" class="hover:underline">Contact Us</a>
                      </li>
                      <li>
                          <AnchorLink href='#feedback' style={{textDecoration:"none"}}><a  style={{textDecoration :"none" , color :'#FB557C ' , fontWeight :"bold" , fontSize : 18}} href="#" class="hover:underline">Feedback</a></AnchorLink>
                      </li>
                  </ul>
              </div>
              <div style={{display :"flex" , flexDirection :"column" , alignItems :"center" , justifyContent :"center"}}>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a  style={{textDecoration :"none" , color :'#FB557C' , fontWeight :"bold" , fontSize : 18}} href="https://instagram.com/crochet_shoptn?igshid=MzRlODBiNWFlZA==" class="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a  style={{textDecoration :"none" , color :'#FB557C' , fontWeight :"bold" , fontSize : 18}} href="https://instagram.com/crochet_shoptn?igshid=MzRlODBiNWFlZA==" class="hover:underline">Facebook</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <div className='author'>
          <span class="text-sm  sm:text-center">© 2023 <a href="https://instagram.com/crochet_shoptn?igshid=MzRlODBiNWFlZA==" class="hover:underline"  style={{color :"#FB557C" , fontFamily :"'Pacifico', cursive" , textDecoration :"none" , fontSize : 19}}>T ' Shop</a>. All Rights Reserved.
          </span>
          <span class="text-sm  sm:text-center ">Made With Love by <a href="https://www.instagram.com/slama.selim/" style={{color :"#FB557C"}}>Me</a>
          </span>
          </div>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="https://instagram.com/crochet_shoptn?igshid=MzRlODBiNWFlZA==" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a  style={{textDecoration :"none"}} href="https://instagram.com/crochet_shoptn?igshid=MzRlODBiNWFlZA==" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                  <span class="sr-only">Instagram community</span>
              </a>
              <a  style={{textDecoration :"none"}} href="https://instagram.com/crochet_shoptn?igshid=MzRlODBiNWFlZA==" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>                  <span class="sr-only">Tiktok community</span>
              </a>
          </div>
      </div>
    </div>
</footer>

    </div>
  )
}
