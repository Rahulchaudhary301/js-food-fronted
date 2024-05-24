import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AboutSection from './AboutSection';
import SocialResponsibility from './SocialResponsibility';
import { FaArrowRight } from "react-icons/fa";
import enquarypic from '../img/contactimg.jpg'
import Enquary from './Enquary';

export default function NavInquiry() {

    const navigation = useNavigate()

   
    const handleScroll = () => {
        // const Headboxes = document.querySelectorAll('.product-head-container');


        const boxes1 = document.querySelectorAll('.social-conatiner');
        //    const boxes2 = document.querySelectorAll('.produt-box1');
        //    const boxes3 = document.querySelectorAll('.produt-box1');
        //    const boxes4 = document.querySelectorAll('.produt-box1');




        boxes1.forEach(box => {
            if (window.scrollY >= 5) {
                box.classList.add('showhead');
            } else {
              //  box.classList.remove('showhead');
                //1000
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
            <div className="nav-enquiry-body">

                <div className="abutUs-container">
                    <div className="imgBoxAbout">
                        <img className='enimg' src={enquarypic}></img>
                    </div>

                    <div className="AboutUs-headdd">
                        <h1>Enquiry</h1>
                    </div>
                    <div className="pbox">
                        <p><span onClick={() => navigation('/')} className='hb'>Home</span> <FaArrowRight /> Enquiry</p>
                    </div>
                </div>

                <Enquary />
                <SocialResponsibility />

            </div>
        </div>
    )
}
