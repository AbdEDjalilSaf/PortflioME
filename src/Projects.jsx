import React, { useRef, useState } from 'react';
import './App.css'
import { Link, Routes ,Route } from 'react-router-dom';
import Footer from './Footer.jsx'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import oclockPng from '../image/oclock.png'
import stikyNotesPng from '../image/stiky.png'
import articlePng from '../image/article.png'
import profilePng from '../image/profile.png'



function Projects(){

  const [isOpen,setIsOpen] = useState(true);
  const clickMenuSvg = ()=>{
    setIsOpen(!isOpen);
  }
  
  let path = window.location.pathname;

return(
<>

<div className='w-full fixed headerFixed  overflow-x-hidden top-0'>
         <header className='py-4 header justify-between px-10 overflow-x-hidden lg:py-7 lg:px-15 xl:pt-4 xl:pb-4 xl:px-20 flex items-center md:justify-between xl:justify-between lg:justify-between z-50'>
           <a className=' logo appFixed cursor-pointer'>S</a>
          <nav>
          <ul className='flex gap-10 items-center'>
            <li><Link to="/" className='textLink  '>Home</Link></li>
            <li><Link  to="/Projects" className='textBase {path===to ? active : "" } '>PROJECTS</Link></li>
            <li><Link  to='/AboutME' className='textBase '>ABOUT ME</Link></li>
            <button onClick={clickMenuSvg} className='md:hidden'>
              <svg xmlns="http://www.w3.org/2000/svg" fill='#cdf381' viewBox="0 0 448 512" className='w-6 cursor-pointer menuSvg' strokeWidth={0.5}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </button>
         </ul>
         </nav>
        </header>
        </div>

<div className='App mt-64 mb-16 flex '>
<div className=' grid grid-cols-1 lo:gap-4 md:gap-5 lg:gap-5 xl:gap-5 md:grid-cols-2 w-full'>
  <a href='https://portflio-ddabnbav4-abd-el-djalil-safs-projects.vercel.app/' className='bg-[#aaaaaa]  hover:bg-[#503bd5] rounded-md'>
    <div className='image relative'>
    <LazyLoadImage src={profilePng} loading='lazy' className='macbookImg rounded-t-md ' />
    <div className='contient'>
      <h1>Show more</h1>
    </div>
  </div>
  <div className='text py-3 px-5'>
<h3 className='text-white lo:text-xl lo:font-extrabold mb-3'>My Profile</h3>
<a className='text-white '>see project</a>
    </div>
  </a>


  <a href='https://store-one-oeq7.vercel.app/' className='bg-[#aaaaaa] hover:bg-[#503bd5] rounded-md'>
    <div className='image relative'>
    <LazyLoadImage src={articlePng} loading='lazy' className='macbookImg z-50 rounded-t-md' />
    <div className='contient'>
      <h1>Show more</h1>
    </div>
    </div>
    <div className='text py-3 px-5'>
<h3 className='text-white lo:text-xl lo:font-extrabold mb-3'>Fashion</h3>
<a className='text-white'>see project</a>
    </div>
  </a>


  <a href='https://2a7rtdydrv2ztgv4t7if5g.on.drv.tw/Steky Notes/stiky.html' className='bg-[#aaaaaa] hover:bg-[#503bd5] rounded-md'>
    <div className='image relative'>
    <LazyLoadImage src={stikyNotesPng} loading='lazy' className='macbookImg z-50 rounded-t-md' />
    <div className='contient'>
      <h1>Show more</h1>
    </div>
    </div>
    <div className='text  py-3 px-5'>
<h3 className='text-white lo:text-xl lo:font-extrabold mb-3'>Stiky notes project</h3>
<a className='text-white '>see project</a>
    </div>
  </a>


  <a href='https://2a7rtdydrv2ztgv4t7if5g.on.drv.tw/Oclock App/oclock.html' className='bg-[#aaaaaa] hover:bg-[#503bd5] rounded-md'>
    <div className='image rounded-lg relative'>
    <LazyLoadImage src={oclockPng} loading='lazy' className='macbookImg z-50 rounded-t-md' />
    <div className='contient'>
      <h1>Show more</h1>
    </div>
    </div>
    <div className='text py-3 px-5'>
<h3 className='text-white lo:text-xl lo:font-extrabold mb-3'>O'clock Interfice</h3>
<a className='text-white '>see project</a>
    </div>
  </a>



</div>






</div>

<Footer />




      
{isOpen ?
  <div className='  w-[91%] top-0 left-0 fixed menuHidden '>
<div className=' bg-white h-[100vh]'>
<nav>
<div className='flex justify-end items-center px-5 py-7 bg-[#503bd5]'>
<button onClick={clickMenuSvg} className='md:hidden '>
     <svg xmlns="http://www.w3.org/2000/svg" fill='#cdf381' viewBox="0 0 384 512" className='w-6 cursor-pointer'><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
</button>
</div>
<ul className='flex flex-col gap-3 py-7 px-4'>
<li className='block '><Link to="/" className='textLinkTwo text-[#666666] flex justify-between items-center'>Home<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" ><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></Link></li>
<li className='block'><Link  to="/Projects" className='textBaseTwo {path===to ? Bactive : "" } flex justify-between items-center'>PROJECTS<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#503bd5'><path d="m656-120-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Zm-416-80q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-63-63 57-57 160 160-160 160-57-56 63-64h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm-64-480-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Z"/></svg></Link></li>
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
<li className='block'><Link  to="/Projects" className='textBaseTwo {path===to ? Bactive : "" } flex justify-between items-center'>PROJECTS<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#503bd5'><path d="m656-120-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Zm-416-80q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-63-63 57-57 160 160-160 160-57-56 63-64h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm-64-480-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Z"/></svg></Link></li>
<li className='block'><Link  to='/AboutME' className='textBaseTwo text-[#666666] flex justify-between items-center'>ABOUT ME<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg></Link></li>


</ul>
</nav>
</div>
</div>
}


</>

)
}

export default Projects


