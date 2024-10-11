import React, { useState } from "react";
import { footer } from "../../data/Data";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState(""); // State to manage email input
  const [alertMessage, setAlertMessage] = useState(""); // State for alert message

  const handleSubscribe = () => {
    if (email) {
      setAlertMessage(`Thank you for subscribing with "${email}"!`); // Show alert message
      setEmail(""); // Clear email input
      setTimeout(() => setAlertMessage(""), 3000); // Clear message after 3 seconds
    } else {
      setAlertMessage("Please enter a valid email address."); // Show error message
      setTimeout(() => setAlertMessage(""), 3000); // Clear message after 3 seconds
    }
  };

  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <Link
            to='/contact'
            ><button className='btn5'>Contact Us Today</button></Link>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month.
              </p>

              <div className='input flex'>
                <input 
                  type='text' 
                  placeholder='Email Address' 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                />
                <button onClick={handleSubscribe}>Subscribe</button> {/* Subscribe button */}
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div className='box' key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((item, index) => (
                  <li key={index}>{item.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      {alertMessage && <div className="alert">{alertMessage}</div>} {/* Alert message display */}

      <div className='legal'>
        <span>© 2024 RentUP. Designed By Micky.</span>
      </div>
    </>
  );
}

export default Footer;
