import React, { useState } from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    alert(`Thank you for your message, ${formData.name}! We will get back to you shortly.`);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    }); // Reset form after submission
  };

  const styles = {
    form: {
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      transition: 'border 0.3s ease',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      transition: 'border 0.3s ease',
    },
    button: {
      padding: '12px 20px',
      backgroundColor: '#27ae60',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
  };

  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' style={styles.form} onSubmit={handleSubmit}>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input 
                type='text' 
                placeholder='Name' 
                name='name'
                value={formData.name} 
                onChange={handleChange}
                style={styles.input} 
                required
              />
              <input 
                type='email' 
                placeholder='Email' 
                name='email'
                value={formData.email} 
                onChange={handleChange}
                style={styles.input} 
                required 
              />
            </div>
            <input 
              type='text' 
              placeholder='Subject' 
              name='subject'
              value={formData.subject} 
              onChange={handleChange}
              style={styles.input} 
              required 
            />
            <textarea 
              cols='30' 
              rows='10' 
              name='message'
              value={formData.message} 
              onChange={handleChange}
              style={styles.textarea} 
              required 
            />
            <button type='submit' style={styles.button}>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
