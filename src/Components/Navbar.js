import React, { useEffect, useState } from 'react'
import whatupImg from '../img/wicon.png'
import { IoIosMail } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";



export default function Navbar() {

    const[showbutton,setShowButton]=useState(false)

    let isNavUp = false;

    window.onload = function () {
        var boxes = document.querySelectorAll('.product-head-container');
        if (boxes) {
            boxes.forEach(function (box) {
                box.classList.add('head_Box');
            });
        }
    };


const openMenu=()=>{

    var menu = document.querySelectorAll('.drope-menu');
    if (menu) {
        menu.forEach(function (box) {
            box.classList.add('showBoxx');
        });

        setShowButton(true)
    }

}



const closeMenu=()=>{

    var menu = document.querySelectorAll('.drope-menu');
    if (menu) {
        menu.forEach(function (box) {
            box.classList.remove('showBoxx');
        });

        setShowButton(false)
    }

}


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleNavLinkClick = () => {
        scrollToTop();
    };


    const handleScroll = () => {
        // const Headboxes = document.querySelectorAll('.product-head-container');
        const boxes1 = document.querySelectorAll('.nav-body');
        // const boxes2 = document.querySelectorAll('.mm');
        // const boxes3 = document.querySelectorAll('.sec3');
        // const boxes4 = document.querySelectorAll('.sec4');


        boxes1.forEach(box => {

            if (window.scrollY >= 100) {
                box.classList.remove('up-nav-body');
                box.classList.add('dark-nav-body');
            } else if (window.scrollY >= 10) {
                box.classList.add('up-nav-body');
                box.classList.remove('dark-nav-body');
            } else {
                box.classList.remove('up-nav-body', 'dark-nav-body');
            }
        });



    };



    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const handleWhatsAppClick = () => {
        const phoneNumber = '7000587899';
        const whatsappURL = `https://wa.me/${phoneNumber}`;
        window.location.href = whatsappURL;
    };




    return (
        <div>
            <div className="nav-body">
                <div className="nav-container">
                    <div className="nav-logo">
                        <h1>JS <span>Foods</span></h1>
                    </div>
                    <div className="nav-menu">
                        <ul >
                            <NavLink exact to='/' activeClassName="active" onClick={handleNavLinkClick} className='mm'>HOME</NavLink>
                            <NavLink to='/AboutUs' activeClassName="active" onClick={handleNavLinkClick}>ABOUT</NavLink>
                            <NavLink to='/Product' activeClassName="active" onClick={handleNavLinkClick}>PRODUCTS</NavLink>
                            <NavLink to='/Enquiry' activeClassName="active" onClick={handleNavLinkClick}>ENQUIRY</NavLink>
                        </ul>

                        <div className="nav-whatup-logo">
                            <div onClick={handleWhatsAppClick} className="whatup-logo-box">
                                <img src={whatupImg}></img>
                            </div>
                        </div>


                    </div>

                    <div className="bar-box">
                       {
                        !showbutton ? <FaBars onClick={openMenu} className='bars' />
                        :
                        <MdOutlineClose onClick={closeMenu} className='bars' />
                       }
                    </div>

                </div>
                <div className="drope-menu">

                    <div className="nav-menu">
                        <ul >
                            <NavLink exact to='/' activeClassName="active" onClick={handleNavLinkClick} className='mm'>HOME</NavLink>
                            <NavLink to='/AboutUs' activeClassName="active" onClick={handleNavLinkClick}>ABOUT</NavLink>
                            <NavLink to='/Product' activeClassName="active" onClick={handleNavLinkClick}>PRODUCTS</NavLink>
                            <NavLink to='/Enquiry' activeClassName="active" onClick={handleNavLinkClick}>ENQUIRY</NavLink>
                            <div className="nav-whatup-logo">
                            <div onClick={handleWhatsAppClick} className="whatup-logo-box">
                                <img src={whatupImg}></img>
                            </div>
                        </div>
                        </ul>

                    </div>

                </div>

            </div>
        </div>
    )
}
