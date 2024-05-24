import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HeroPage() {
    const navigation=useNavigate()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleNavLinkClick = () => {
        scrollToTop();
    };
    return (
        <div>
            <div className="hero-body">
                <div className="hero-container">
                    <div className="imgboxx">

                    </div>

                    <div className="hero-content-body">
                        <div className="her0-content-box">
                            <div className="her0-dataa">
                                <h1></h1>
                                <br/>
                                <button onClick={() => { navigation('/Enquiry'); handleNavLinkClick(); }} className='button1 req'>REQUEST A QUOTE</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
