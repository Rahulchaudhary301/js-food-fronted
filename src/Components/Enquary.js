import React, { useState } from 'react'
import boy from '../img/pic1.png'
import ico from '../img/icon1.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Enquary() {

    const[submitStatus , setSubmitStatus]=useState('Submit')

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        inquiry: '',
        companyName: '',
        message: ''
    });



    const DisebleButton=()=>{
        // Disable the button
       // document.getElementById("myButton").disabled = true;
        // Add a class to style the button as inactive
       document.getElementById("myButton").classList.add("inactive");
    }



    const ShowButton=()=>{
        // Disable the button
        document.getElementById("myButton").disabled = false;
        // Add a class to style the button as inactive
       document.getElementById("myButton").classList.remove("inactive");
    }



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const validationResult = isFormValid();
        if (!validationResult.isValid) {
            toast.error("Form is not valid");
           // console.log("Form is not valid");
            return; // Stop further execution if form is not valid
        }

        setSubmitStatus("Sending...")
        DisebleButton()
    
        axios.post('https://jsfoods.onrender.com/form', formData)
            .then(response => {
               // console.log('Form submitted successfully:', response);
               setSubmitStatus("Send")
               ShowButton()
                toast.success("Form submitted successfully");
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    contactNumber: '',
                    inquiry: '',
                    companyName: '',
                    message: ''
                });
                setSubmitStatus("Submit")
            })
            .catch(error => {
               // console.error('Error submitting form:', error);
                toast.error("Error submitting form");
            });
    };



    const isFormValid = () => {
        if (
            formData.firstName.trim() === '' ||
            formData.lastName.trim() === '' ||
            formData.email.trim() === '' ||
            formData.contactNumber.trim() === '' ||
            formData.inquiry.trim() === '' ||
            formData.companyName.trim() === '' ||
            formData.message.trim() === ''
        ) {
            toast.error("All fields are required");
            return { isValid: false };
        }
        
        // Check if contact number is a valid number
        if (isNaN(formData.contactNumber) || formData.contactNumber.length !== 10) {
            toast.error("Contact number must be a valid 10-digit number.");
            return { isValid: false };
        }
    
        // You can add more validation rules here
    
        return { isValid: true };
    };





    return (
        <div>
            <div className="inquary-body" id='inquiry'>

                <div className="hading-enquiring">
                    <h1>REQUEST A QUOTE</h1>
                    <p>Discover the power of seamless global trade with JS Foods. Request a quote today to unlock competitive pricing, unparalleled quality, and expert logistics. Your journey begins with a simple quote request—effortless, efficient, and tailored to meet your unique needs.</p>
                </div>

                <div className="inquary-con">

                    <div className="inqiry-secton1">
                        <div className="pic-box">
                            <img src={boy}></img>
                        </div>

                        <div className="card-box">
                            <img src={ico}></img>
                            <h3>Request A Quote</h3>
                        </div>

                    </div>


                    <div className="inquary-section2">


                        <div className="enquary-conatniner">

                            <div className="contact-input-body-data" >
                                <p>Send us inquiry using the form below and we will get back to you</p>


                                <form onSubmit={handleSubmit}>
                                    <div className="inputname">
                                        <div className="nnn">
                                            <label htmlFor="firstName">FIRST NAME:</label>
                                            <input
                                                className="inputt"
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="eee">
                                            <label htmlFor="contactNumber">CONTACT NUMBER:</label>
                                            <input
                                                className="inputt"
                                                type="tel"
                                                
                                                id="contactNumber"
                                                name="contactNumber"
                                                value={formData.contactNumber}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="inputname">
                                        <div className="nnn">
                                            <label htmlFor="lastName">LAST NAME:</label>
                                            <input
                                                className="inputt"
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        {/* <div className="eee">
                                            <label htmlFor="inquiry">INQUIRY:</label>
                                            <input
                                                className="inputt"
                                                type="text"
                                                id="inquiry"
                                                name="inquiry"
                                                value={formData.inquiry}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div> */}
                                    </div>

                                    <div className="inputname">
                                        <div className="nnn">
                                            <label htmlFor="email">YOUR EMAIL:</label>
                                            <input
                                                className="inputt"
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="eee">
                                            <label htmlFor="companyName">COMPANY NAME:</label>
                                            <input
                                                className="inputt"
                                                type="text"
                                                id="companyName"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <label className="mess" htmlFor="message">MESSAGE / INQUIRY :</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>

                                    <button id="myButton"  className="submitbut" type="submit">{submitStatus}</button>
                                    <ToastContainer   />
                                </form>
                            </div>
                        </div>



                    </div>


                </div>
            </div>
        </div>
    )
}
