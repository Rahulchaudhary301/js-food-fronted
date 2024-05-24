
import { useEffect, useState } from 'react';
import './App.css';
import AboutMore from './Components/AboutMore';
import AboutSection from './Components/AboutSection';
import Enquary from './Components/Enquary';
import HeroPage from './Components/HeroPage';
import HomeMain from './Components/HomeMain';
import LastFooter from './Components/LastFooter';
import LastSecondFooter from './Components/LastSecondFooter';
import NavAbout from './Components/NavAbout';
import NavInquiry from './Components/NavInquiry';
import NavProducts from './Components/NavProducts';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import SocialResponsibility from './Components/SocialResponsibility';
import { FaArrowUp } from "react-icons/fa";

import { Routes, Route, Router, BrowserRouter, Link } from 'react-router-dom'

function App() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (

    <>

     <div className="app-body">

     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeMain />} />
          <Route path='/AboutUs' element={<NavAbout/>} />
          <Route path='/Product' element={<NavProducts />} />
          <Route path='/Enquiry' element={<NavInquiry />} />
          <Route path='/MoreAbout' element={<AboutMore />} />

        </Routes>
        <LastSecondFooter />
       {
        (
          showButton &&  <div onClick={scrollToTop} className="smallbar"><FaArrowUp className='forward'/> </div>
        )
       }
      
        <LastFooter />
      </BrowserRouter>
     </div>





      
     
      
    </>
  );
}

export default App;
