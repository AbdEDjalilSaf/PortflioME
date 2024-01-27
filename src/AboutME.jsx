import './App.css'
import React, { useRef, useState } from 'react';
import { Link, Routes ,Route } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Footer from './Footer.jsx'
import pictureMe from '../image/me.jpg'
import html from '../image/html.png'
import css from '../image/css.png'
import js from '../image/js.png'
import git from '../image/git.png'
import githup from '../image/githup.png'
import react from '../image/react.png'
import vite from '../image/vite.png'
import postman from '../image/postman.png'
import api from '../image/api.png'
import jira from '../image/jira.png'


function AboutME(){

    const [isOpen,setIsOpen] = useState(true);
    const clickMenuSvg = ()=>{
      setIsOpen(!isOpen);
    }

    console.log(window.location.pathname);  

let path = window.location.pathname;

return(
<>

     <div className='w-full fixed headerFixed  overflow-x-hidden top-0'>
         <header className='py-4 header justify-between px-10 overflow-x-hidden lg:py-7 lg:px-15 xl:pt-4 xl:pb-4 xl:px-20 flex items-center md:justify-between xl:justify-between lg:justify-between z-50'>
           <a className=' logo appFixed cursor-pointer'>S</a>
          <nav>
          <ul className='flex gap-10 items-center'>
            <li><Link to="/" className='textLink  '>Home</Link></li>
            <li><Link  to="/Projects" className='textBase  '>PROJECTS</Link></li>
            <li><Link  to='/AboutME' className='textBase  {path===to ? active : "" }'>ABOUT ME</Link></li>
            <button onClick={clickMenuSvg} className='md:hidden'>
               <svg xmlns="http://www.w3.org/2000/svg" fill='#cdf381' viewBox="0 0 448 512" className='w-6 cursor-pointer menuSvg' strokeWidth={0.5}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </button>
         </ul>
         </nav>
        </header>
        </div>

<div className='App mt-64 mb-16 flex  '>
<div className='text relaive '>

<h2 className='flex items-center '>Hi, I'm Abd el Djalil 👋</h2>
<h3>I am Abd el Djalil Saf,I am a scientific university and computer sicence student in (Kasdi Merbah Ourgla) in my Second Year of University
.Currently, I am a front-end developer in the field of website development for nearly two years of learning and application Through self-learning.
When I started studying in the first year of university in 2021, majoring in mathematics and computer science, I studied algorithms and information structuring,
and I was applying that in the C language after six months. I was inspired to enter the programming field after advice from my friend, and I knew the difference between them,
and I chose this field without hesitation. It certainly seemed like a weak start, little by little. Then I began to increase the hours of study after I began to understand things and listen to many programming discussions around the web,
and this learning helped in all of that. Self and some university concepts.At university, I studied a range of subjects such as information systems, algebra and the graph
Now.I'm programming some projects and have experience to make great user interface with some of the best framework like React JS, Tailwind CSS,Next JS with great experience in JavaScript .</h3>

</div>
<div className='image '>
<LazyLoadImage src={pictureMe} loading='lazy' className='aboutImg  z-50' />
</div>
</div>




<div className='slides'>
<div className='logoSlides flex py-6 my-20 items-center select-none '>
<LazyLoadImage src={html} loading='lazy' className='windSvg lo:h-16 mx-4 ml-6 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none ' />
<LazyLoadImage src={css} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={js} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={git} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={githup} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={react} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={vite} loading='lazy' className='windSvg lo:h-16 mx-4  select-none' />
<LazyLoadImage src={postman} loading='lazy' className='windSvg lo:h-16 mx-5 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={api} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={jira} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={html} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={css} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={js} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={git} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={githup} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={react} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={vite} loading='lazy' className='windSvg lo:h-16 mx-4 select-none' />
<LazyLoadImage src={postman} loading='lazy' className='windSvg lo:h-16 mx-5 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={api} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={jira} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={html} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={css} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={js} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={git} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={githup} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={react} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={vite} loading='lazy' className='windSvg lo:h-16 mx-4 select-none' />
<LazyLoadImage src={postman} loading='lazy' className='windSvg lo:h-16 mx-5 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={api} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' />
<LazyLoadImage src={jira} loading='lazy' className='windSvg lo:h-16 mx-4 lo:w-16 md:w-20 md:h-20 md:mx-8 select-none' /> 
</div>


</div>
<Footer />



      
{isOpen ?
  <div className='  w-[91%] top-0 left-0 fixed  menuHidden'>
<div className=' bg-white h-[100vh]'>
<nav>
<div className='flex justify-end items-center px-5 py-7 bg-[#503bd5]'>
<button onClick={clickMenuSvg} className='md:hidden '>
   <svg xmlns="http://www.w3.org/2000/svg" fill='#cdf381' viewBox="0 0 384 512" className='w-6 cursor-pointer'><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
</button>
</div>
<ul className='flex flex-col gap-3 py-7 px-4'>
<li className='block '><Link to="/" className='textLinkTwo {path===to ? Bactive : "" } flex justify-between items-center'>Home<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#503bd5'><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></Link></li>
<li className='block'><Link  to="/Projects" className='textBaseTwo text-[#666666] flex justify-between items-center'>PROJECTS<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m656-120-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Zm-416-80q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-63-63 57-57 160 160-160 160-57-56 63-64h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm-64-480-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Z"/></svg></Link></li>
<li className='block'><Link  to='/AboutME' className='textBaseTwo text-[#666666] flex justify-between items-center'>ABOUT ME<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg></Link></li>

</ul>
</nav>
</div>
</div>
:
<div className='  w-[91%] top-0 left-0 fixed menuBlock '>
<div className=' bg-white h-[100vh]'>
<nav>
<div className='flex justify-end items-center px-5 py-7 bg-[#503bd5]'>
<button onClick={clickMenuSvg} className='md:hidden '>
     <svg xmlns="http://www.w3.org/2000/svg" fill='#cdf381' viewBox="0 0 384 512" className='w-6 cursor-pointer'><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
</button>
</div>
<ul className='flex flex-col gap-3 py-7 px-4'>
<li className='block '><Link to="/" className='textLinkTwo text-[#666666] flex justify-between items-center'>Home<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" ><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></Link></li>
<li className='block'><Link  to="/Projects" className='textBaseTwo text-[#666666] flex justify-between items-center'>PROJECTS<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m656-120-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Zm-416-80q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-63-63 57-57 160 160-160 160-57-56 63-64h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm-64-480-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Z"/></svg></Link></li>
<li className='block'><Link  to='/AboutME' className='textBaseTwo {path===to ? Bactive : "" } flex justify-between items-center'>ABOUT ME<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#503bd5'><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg></Link></li>

</ul>
</nav>
</div>
</div>
}


</>
)

}

export default AboutME


// function costamize({href,cheldren,...props}){


// return (
// <>
// <li>
//     <Link to={href} {...props}>{cheldren}</Link>
// </li>
// </>
// )

// }












