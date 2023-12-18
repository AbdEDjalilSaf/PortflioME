import './App.css'
import React, { useRef, useState } from 'react';
import { Link, Routes ,Route } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component'


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
              {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill='#cdf381' viewBox="0 0 448 512" className='w-6 cursor-pointer menuSvg' strokeWidth={0.5}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" fill='#cdf381' viewBox="0 0 384 512" className='w-6 cursor-pointer'><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>}
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
<LazyLoadImage src='/image/me.jpg' loading='lazy' className='aboutImg  z-50' />
</div>
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












