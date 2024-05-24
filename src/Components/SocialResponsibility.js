import React, { useEffect } from 'react'

export default function SocialResponsibility() {
    const handleScroll = () => {
        // const Headboxes = document.querySelectorAll('.product-head-container');


        const boxes1 = document.querySelectorAll('.social-conatiner');
        //    const boxes2 = document.querySelectorAll('.produt-box1');
        //    const boxes3 = document.querySelectorAll('.produt-box1');
        //    const boxes4 = document.querySelectorAll('.produt-box1');




        boxes1.forEach(box => {
            if (window.scrollY >= 2550) {
                box.classList.add('showhead');
            } else {
              //  box.classList.remove('showhead');
                //950
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
            <div className="social-body">
                <div className="social-conatiner">
                    <h1 className='socilhead'>SOCIAL <span>RESPONSIBILITY</span></h1>
                    <div className="social-data">

                        <div className="social-data-section1">
                            <p>The corporate social responsibility policy of <span>JS Foods</span> is embedded in ourcompany valuesguided by standards and best practices, and driven by our aspiration for excellence in the overall performance of our business.</p>
                        </div>
                        <div className="social-data-section2">
                            <p><span>JS Foods</span> is responsible for the implementation of this policy and will make the necessary resources available to fulfil our responsibilities. The responsibility for our performance on this policy rests with all our employees.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
