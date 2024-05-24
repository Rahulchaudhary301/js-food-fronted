import React from 'react'
import { useNavigate } from 'react-router-dom'
import png1 from '../img/pngicon1.png'
import png2 from '../img/pngicon2.png'

export default function AboutSection() {

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
            <div className="about-body" id='Aboutus'>
                <div className="about-container">
                    <div className="anout-data">
                        <div className="abou-data-box">
                            <h1>About Our <span>Company</span></h1>
                            <h2>Finest Products | Reliable Process</h2>
                            <p>Welcome to JS Foods, your ultimate source for top-quality products! JS Foods, a  company, has been revolutionizing international trade with their extensive experience, expertise and quality services. With a commitment to quality, integrity, and customer satisfaction, they have built a trusted reputation in the market. JS Foods is  while providing top-notch services in the world of import-export!</p>
                            <button onClick={() => { navigation('/MoreAbout'); handleNavLinkClick(); }} className='button1 see'>See More</button>
                        </div>

                    </div>



                    <div className="about-img-data">
                        <div className="about-img-conatiner">
                            <div className="about-img">
                               <div className="img-1">

                               </div>
                            </div>

                            <div className="abou-img-2">
                                  <div className="img-2"></div>
                            </div>

                            <div className="abou-img-3">
                               <div className="img-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="pngIcon-box1">
                    <img src={png1}></img>
                 </div>

                 <div className="pngIcon-box2">
                    <img src={png2}></img>
                 </div>

            </div>
        </div>
    )
}
