import './App.css'
import React, { useRef, useState } from 'react';
import { Link, Routes ,Route } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Design from './Desgin.jsx'
import Overyears from './Overyears.jsx'
import Article from './Article.jsx'
import Intergrat from './Intergrat.jsx'
import Footer from './Footer.jsx'





function menuMobile(){

    const [isOpen,setIsOpen] = useState(true);
    const clickMenuSvg = ()=>{
      setIsOpen(!isOpen);
    }
    
    let path = window.location.pathname;


return (
    <>
<div className=''>
<div className='absolute w-[70%] bg-white'>
<nav>
<ul className=''>
<li><Link to="/" className='textLink {path===to ? active : "" }  '>Home</Link></li>
<li><Link  to="/Projects" className='textBase    '>PROJECTS</Link></li>
<li><Link  to='/AboutME' className='textBase '>ABOUT ME</Link></li>




</ul>
</nav>
</div>
</div>

    </>
)






}
export default menuMobile