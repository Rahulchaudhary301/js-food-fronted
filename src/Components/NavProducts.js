import React, { useEffect } from 'react'
import Products from './Products'
import SocialResponsibility from './SocialResponsibility'
import { FaArrowRight } from "react-icons/fa";
import navProduct from '../img/navSpice.jpg'
import { useNavigate } from 'react-router-dom';

export default function NavProducts() {



    const handleScrolll = () => {
        const navDiv = document.querySelector('.product-head-container');
        const headDiv = document.querySelector('.product-head-container');
        const navDiv1 = document.querySelector('.moveBox11');
        const navDiv2 = document.querySelector('.moveBox12');
        const navDiv3 = document.querySelector('.moveBox13');
        const navDiv44 = document.querySelector('.moveBox221');
        const navDiv5 = document.querySelector('.moveBox122');
        const navDiv6 = document.querySelector('.box6');
        const navDiv7 = document.querySelector('.moveBox144');

        const boxes1 = document.querySelectorAll('.social-conatiner');
    
        if (navDiv) {
            if (window.scrollY >= 60) {
                headDiv.classList.add('head_Box');
            } else {
              //  headDiv.classList.remove('head_Box');
            }
    
            if (window.scrollY >= 250) {
                navDiv1.classList.add('show');
            } else {
               // navDiv1.classList.remove('show');
            }
    
            if (window.scrollY >= 250) {
                navDiv2.classList.add('show');
            } else {
               // navDiv2.classList.remove('show');
            }
    
            if (window.scrollY >= 250) {
                navDiv3.classList.add('show');
            } else {
              //  navDiv3.classList.remove('show');
            }
    
            if (window.scrollY >= 500) {
                navDiv44.classList.add('show');
            } else {
               // navDiv44.classList.remove('show');
            }
    
            if (window.scrollY >= 500) {
                navDiv5.classList.add('show');
            } else {
               // navDiv5.classList.remove('show');
            }
    
            if (window.scrollY >= 500) {
                navDiv6.classList.add('show');
            } else {
               // navDiv6.classList.remove('show');
            }
    
            if (window.scrollY >= 800) {
                navDiv7.classList.add('show');
            } else {
               // navDiv7.classList.remove('show');
            }
        }


        boxes1.forEach(box => {
            if (window.scrollY >= 100) {
                box.classList.add('showhead');
            } else {
              //  box.classList.remove('showhead');
                //1500
            }

        });

    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScrolll);
        return () => {
            window.removeEventListener('scroll', handleScrolll);
        };
    }, []);
    


    

    const navigation = useNavigate()
    return (
        <div>
            <div className="nav-product-body">
                <div className="Abut-body">
                    <div className="abutUs-container">
                        <div className="imgBoxAbout">
                            <img src={navProduct}></img>
                        </div>

                        <div className="AboutUs-headdd">
                            <h1>Products</h1>
                        </div>
                        <div className="pbox">
                            <p><span onClick={() => navigation('/')} className='hb'>Home</span> <FaArrowRight /> Products</p>
                        </div>
                    </div>

                    <div className="nav-pro">
                       <Products />
                    </div>
                    <SocialResponsibility />
                </div>
            </div>
        </div>
    )
}
