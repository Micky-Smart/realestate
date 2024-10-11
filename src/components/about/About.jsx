import React, { useState } from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  const [email, setEmail] = useState(""); // State to store email input
  const [alertMessage, setAlertMessage] = useState(""); // State for alert message

  const handleEmailSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (email) {
      setAlertMessage(`Thank you for subscribing with email: ${email}`);
      setEmail(""); // Clear the input after submission
    } else {
      setAlertMessage("Please enter a valid email address.");
    }
  };

  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            
            <form onSubmit={handleEmailSubmit} className="email-form">
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className='btn2' type="submit">Subscribe</button>
            </form>
            
            {alertMessage && <div className="alert">{alertMessage}</div>} {/* Alert message display */}
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
