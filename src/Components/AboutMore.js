import React, { useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa";
import navaboutpic from '../img/navAbout.jpg'
import pic2 from '../img/pic2.jpg'
import { useNavigate } from 'react-router-dom'
import SocialResponsibility from './SocialResponsibility';

export default function AboutMore() {
    const navigation = useNavigate()

    const handleScroll = () => {
        // const Headboxes = document.querySelectorAll('.product-head-container');


        const boxes1 = document.querySelectorAll('.social-conatiner');
        //    const boxes2 = document.querySelectorAll('.produt-box1');
        //    const boxes3 = document.querySelectorAll('.produt-box1');
        //    const boxes4 = document.querySelectorAll('.produt-box1');




        boxes1.forEach(box => {
            if (window.scrollY >= 10) {
                box.classList.add('showhead');
            } else {
               // box.classList.remove('showhead');
                //800
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
            <div className="MoreAbout-body">

                <div className="abutUs-container">
                    <div className="imgBoxAbout">
                        <img src={navaboutpic}></img>
                    </div>

                    <div className="AboutUs-headdd">
                        <h1>About Company</h1>
                    </div>
                    <div className="pbox">
                        <p><span onClick={() => navigation('/')} className='hb'>Home</span> <FaArrowRight /> Company</p>
                    </div>
                </div>

                <div className="MoreContent-container">
                    <div className="about-more-data">
                        <h1>About Company</h1>
                        <p>Welcome to <span>JS Foods</span>, your ultimate source for top-quality products! JS Foods, a women-owned company, has been revolutionizing international trade with their extensive experience, expertise and quality services. With a commitment to quality, integrity, and customer satisfaction, they have built a trusted reputation in the market. JS Foods is empowering women entrepreneurs while providing top-notch services in the world of import-export!

                            What sets JS Foods apart is our commitment to quality and customer satisfaction. We work closely with our clients to understand their unique requirements and provide tailored solutions that meet their specific objectives. Our team of dedicated professionals is highly skilled in international trade regulations, market trends, and effective negotiation strategies.

                            We believe in building long-lasting partnerships based on trust, integrity, and mutual success. Our extensive network of trusted suppliers, manufacturers, and distributors ensures that our clients gain access to a diverse range of high-quality products from around the globe. Rest assured that every shipment will be handled with utmost care and delivered promptly.</p>
                        <p className='morep'>Join hands with us at <span>JS Foods</span> as we redefine perfection in product supply. Contact us today and let's embark on a mutually beneficial journey towards success!</p>
                    </div>
                </div>


                <div className="more-pic-container">
                    <div className="more-pi-box">
                        <img src={pic2}></img>
                    </div>
                </div>

              <SocialResponsibility/>

            </div>
        </div>
    )
}
