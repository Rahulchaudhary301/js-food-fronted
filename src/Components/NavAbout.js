import React, { useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa";
import navaboutpic from '../img/navAbout.jpg'
import { useNavigate } from 'react-router-dom'
import AboutSection from './AboutSection';
import SocialResponsibility from './SocialResponsibility';

export default function NavAbout() {
   
    const navigation = useNavigate()



    const handleScroll = () => {
        // const Headboxes = document.querySelectorAll('.product-head-container');


        const boxes1 = document.querySelectorAll('.social-conatiner');
        //    const boxes2 = document.querySelectorAll('.produt-box1');
        //    const boxes3 = document.querySelectorAll('.produt-box1');
        //    const boxes4 = document.querySelectorAll('.produt-box1');




        boxes1.forEach(box => {
            if (window.scrollY >= 2) {
                box.classList.add('showhead');
            } else {
               // box.classList.remove('showhead');
                //200
            }

        });


    };



    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <div>
            <div className="Abut-body">
                <div className="abutUs-container">
                    <div className="imgBoxAbout">
                        <img src={navaboutpic}></img>
                    </div>

                    <div className="AboutUs-headdd">
                        <h1>About Us</h1>
                    </div>
                    <div className="pbox">
                        <p><span onClick={() => navigation('/')} className='hb'>Home</span> <FaArrowRight /> About</p>
                    </div>
                </div>

                <AboutSection />

                <div className="abut-respo">
                  <SocialResponsibility />
                </div>
               
            </div>

        </div>
    )
}
