import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'

export default function LastSecondFooter() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
 
 const navigation=useNavigate()

    return (
        <div>


            <div className="footerBody">
                <div className="footerContainer">
                    <div className="footersection1">
                        <h1>JS <span>Foods</span></h1>
                        <hr />
                        <p>JS Foods specializes in ultimate source for top-quality products!</p>
                        <button onClick={() => {navigation('/AboutUs'); scrollToTop()}} className='submitbut butsum'>ABOUT US</button>

                    </div>


                    <div className="footersection2">
                        <h1>Quick Links</h1>
                        <hr />
                        <div className="footer-nav">
                            <ul>
                                <a href='/'>HOME</a>
                                <a href='#Aboutus'>ABOUT</a>
                                <a href='#products'>PRODUCTS</a>
                                <a href='#inquiry'>ENQUIRY</a>

                            </ul>
                        </div>
                    </div>


                    <div className="footersection3">
                        <h1>Official info</h1>
                        <hr />
                        <div className="telDIv">
                            <a href={`tel:9852675983`}> <IoCall className='call' /></a>
                            <a href={`tel:9852675983`}>+91 9123456780</a>
                        </div>

                        <div className="telDIv">
                            <a href={`tel:9852675983`}> <IoCall className='call' /></a>
                           
                            <a href={`tel:9852675983`}>+91 9123456780</a>
                        </div>

                        <div className="telDIv">
                            <FaLocationDot className='locatonIcon' />
                            <p>Lorem, ipsum dolor corrupti nisi. harum numquam inventore perspiciatis illo cumque?</p>
                        </div>



                    </div>




                    <div className="footersection4">
                        <h1>Follow us</h1>
                        <hr />

                        <div className="socialIcon">
                            <MdEmail className='rotateIcon' />
                            <BsTwitterX className='rotateIcon' />
                            <FaLinkedin className='rotateIcon' />
                            <FaSquareInstagram className='rotateIcon' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
