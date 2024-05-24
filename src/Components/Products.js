import React, { useEffect } from 'react'
import spice from '../img/spice.jpg'
import colve from '../img/colves.jpg'
import dry from '../img/dryfruits.jpg'
import Nuts from '../img/nuts.jpg'
import Pulces from '../img/pulces.jpeg'
import Tea from '../img/tea.webp'
import Coffee from '../img/coffee.png'



export default function Products() {



    // window.onload = function () {
    //     var boxes = document.querySelectorAll('.product-head-container');
    //     if (boxes) {
    //         boxes.forEach(function (box) {
    //             box.classList.add('head_Box');
    //         });
    //     }
    // };

    // const handleScroll = () => {
    //     const Headboxes = document.querySelectorAll('.product-head-container');


    //     const boxes1 = document.querySelectorAll('.produt-box1');
    //     const boxes2 = document.querySelectorAll('.produt-box1');
    //     const boxes3 = document.querySelectorAll('.produt-box1');
    //     const boxes4 = document.querySelectorAll('.produt-box1');


    //     Headboxes.forEach(box => {
    //         if (window.scrollY >= 1500) {
    //             box.classList.add('head_Box');
    //         } else {
    //             //  box.classList.remove('head_Box');
    //         }

    //     });

    //     boxes1.forEach(box => {
    //         if (window.scrollY >= 1700) {
    //             box.classList.add('move-show-Box1');
    //         } else {
    //             // box.classList.remove('move-show-Box1');
    //         }

    //     });

    //     boxes2.forEach(box => {
    //         if (window.scrollY >= 1750) {
    //             box.classList.add('move-show-Box1');
    //         } else {
    //             // box.classList.remove('move-show-Box1');
    //         }

    //     });

    //     boxes3.forEach(box => {
    //         if (window.scrollY >= 1750) {
    //             box.classList.add('show-moveBox122');
    //         } else {
    //             // box.classList.remove('show-moveBox122');
    //         }

    //     });

    //     boxes4.forEach(box => {
    //         if (window.scrollY >= 1750) {
    //             box.classList.add('show4_div');
    //         } else {
    //             // box.classList.remove('show4_div');
    //         }

    //     });

    // };



    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);



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

        if (navDiv) {
            if (window.scrollY >= 1100) {
                headDiv.classList.add('head_Box');
            } else {
              //  headDiv.classList.remove('head_Box');
            }

            if (window.scrollY >= 1300) {
                navDiv1.classList.add('show');
            } else {
               // navDiv1.classList.remove('show');
            }

            if (window.scrollY >= 1300) {
                navDiv2.classList.add('show');
            } else {
               // navDiv2.classList.remove('show');
            }

            if (window.scrollY >= 1300) {
                navDiv3.classList.add('show');
            } else {
              //  navDiv3.classList.remove('show');
            }

            if (window.scrollY >= 1600) {
                navDiv44.classList.add('show');
            } else {
              //  navDiv44.classList.remove('show');
            }

            if (window.scrollY >= 1600) {
                navDiv5.classList.add('show-moveBox122');
            } else {
               // navDiv5.classList.remove('show-moveBox122');
            }

            if (window.scrollY >= 1600) {
                navDiv6.classList.add('show');
            } else {
              //  navDiv6.classList.remove('show');
            }

            if (window.scrollY >= 1900) {
                navDiv7.classList.add('show');
            } else {
              //  navDiv7.classList.remove('show');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrolll);
        return () => {
            window.removeEventListener('scroll', handleScrolll);
        };
    }, []);









    return (
        <div>
            <div className="product-body" id='products'>
                <div className="product-head-container">
                    <div className="product-head">
                        <div className="our-product-tex-box">
                            <p>Our Awesome Products</p>
                        </div>
                        <h1>We Are <span>Dedicated</span> To Serving You, Always Trusted For Our Products.</h1>
                        <p className='producthedii'>JS Foods guarantees unwavering commitment – a promise of 100% best quality and genuine products. Your trust is our priority, ensuring excellence in every shipment we deliver.</p>
                    </div>

                </div>





                <div className="product-container">
                    <div className="produts-data">

                        <div className="products-section1">

                            <div className="produt-box1 moveBox11">
                                <div className="im">
                                    <img src={spice}></img>
                                </div>
                                <div className="hhh">
                                    <h2>Spices</h2>
                                </div>

                                {/* <div className="box1-data">
                                    <div className="hoverData">
                                        <h2>Spices</h2>
                                        <p>Spices are plant substances like seeds, fruits, roots, or bark that are used to flavor or color food. </p>
                                        <button className='button1'>Get Enquiry</button>
                                    </div>
                                </div> */}
                            </div>

                            <div className="produt-box1 moveBox12">
                                <div className="im">
                                    <img src={colve}></img>
                                </div>
                                <div className="hhh">
                                    <h2>Cloves</h2>
                                </div>
                                {/* <div className="box1-data">
                                    <div className="hoverData">
                                        <h2>Colve</h2>
                                        <p>Spices are plant substances like seeds, fruits, roots, or bark that are used to flavor or color food. </p>
                                        <button className='button1'>Get Enquiry</button>
                                    </div>
                                </div> */}
                            </div>

                            <div className="produt-box1 moveBox13">
                                <div className="im">
                                    <img src={Nuts}></img>
                                </div>
                                <div className="hhh">
                                    <h2>Betel Nuts</h2>
                                </div>
                                {/* <div className="box1-data">
                                    <div className="hoverData">
                                        <h2>Betal Nuts</h2>
                                        <p>Spices are plant substances like seeds, fruits, roots, or bark that are used to flavor or color food. </p>
                                        <button className='button1'>Get Enquiry</button>
                                    </div>
                                </div> */}
                            </div>


                            <div className="produt-box1 moveBox221">
                                <div className="im">
                                    <img src={dry}></img>
                                </div>
                                <div className="hhh">
                                    <h2>Dry Fruits</h2>
                                </div>
                                {/* <div className="box1-data">
                                    <div className="hoverData">
                                        <h2>Dry Fruits</h2>
                                        <p>Spices are plant substances like seeds, fruits, roots, or bark that are used to flavor or color food. </p>
                                        <button className='button1'>Get Enquiry</button>
                                    </div>
                                </div> */}
                            </div>



                            <div className="produt-box1 moveBox122">
                                <div className="im">
                                    <img src={Pulces}></img>
                                </div>
                                <div className="hhh">
                                    <h2>Pulses</h2>
                                </div>

                            </div>



                            <div className="produt-box1 box6">
                                <div className="im">
                                    <img src={Tea}></img>
                                </div>
                                <div className="hhh">
                                    <h2>Tea</h2>
                                </div>
                                {/* <div className="box1-data">
                                    <div className="hoverData">
                                        <h2>Tea</h2>
                                        <p>Spices are plant substances like seeds, fruits, roots, or bark that are used to flavor or color food. </p>
                                        <button className='button1'>Get Enquiry</button>
                                    </div>
                                </div> */}
                            </div>

                        </div>

                        <div className="products-section2">
                            <div className="produt-box1 lastdiv moveBox144">
                                <div className="im">
                                    <img src={Coffee}></img>
                                </div>
                                <div className="hhh">
                                    <h2>Coffee</h2>
                                </div>
                                {/* <div className="box1-data ">
                                    <div className="hoverData">
                                        <h2>Coffee</h2>
                                        <p>Spices are plant substances like seeds, fruits, roots, or bark that are used to flavor or color food. </p>
                                        <button className='button1'>Get Enquiry</button>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
