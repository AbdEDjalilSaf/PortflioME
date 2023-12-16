import './App.css'
import React, { useRef, useState } from 'react';
import { Link, Routes ,Route } from 'react-router-dom';



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
            <li><Link to="/" className='textLink hidden md:block  {}'>Home</Link></li>
            <li><Link  to="/Projects" className='textBase hidden md:block'>PROJECTS</Link></li>
            <li><Link  to='/AboutME' className='textBase hidden md:block'>ABOUT ME</Link></li>
            <button onClick={clickMenuSvg} className='md:hidden'>
              {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill='#cdf381' viewBox="0 0 448 512" className='w-6 cursor-pointer menuSvg' strokeWidth={0.5}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" fill='#cdf381' viewBox="0 0 384 512" className='w-6 cursor-pointer'><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>}
            </button>
         </ul>
         </nav>
        </header>
        </div>


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












