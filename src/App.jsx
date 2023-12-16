import React, { useRef, useState } from 'react';
import { Link, Routes ,Route } from 'react-router-dom';
import './App.css'
import Home from './Home.jsx'
import AboutME from './AboutME';
import Projects from './Projects.jsx';



function App() {

  console.log(window.location.pathname);  


return (
<>


<Routes>

<Route path='/' element={<Home />}/>
<Route path='/AboutME' element={<AboutME />}/>
<Route path='/Projects' element={<Projects />}/>
</Routes>













</>
)
}






export default App
