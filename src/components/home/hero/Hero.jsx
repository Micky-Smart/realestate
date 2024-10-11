import React, { useState } from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || !propertyType || !priceRange) {
      alert("Please fill out all fields before submitting.");
    } else {
      alert(`Searching for ${propertyType} in ${location} within ${priceRange}`);
      // Here you can also handle the search functionality
      // For example, making an API call to fetch the properties
    }
  };

  const styles = {
    section: {
      padding: '60px 0',
      backgroundColor: '#f7f9fc',
    },
    form: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    box: {
      flex: 1,
      margin: '0 10px',
    },
  };

  return (
    <>
      <section className='hero' style={styles.section}>
        <div className='container'>
          <Heading title='Search Your Next Home' subtitle='Find new & featured property located in your local city.' />

          <form className='flex' onSubmit={handleSubmit} style={styles.form}>
            <div className='box' style={styles.box}>
              <span>City/Street</span>
              <input 
                type='text' 
                placeholder='Location' 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
              />
            </div>
            <div className='box' style={styles.box}>
              <span>Property Type</span>
              <input 
                type='text' 
                placeholder='Property Type' 
                value={propertyType} 
                onChange={(e) => setPropertyType(e.target.value)} 
              />
            </div>
            <div className='box' style={styles.box}>
              <span>Price Range</span>
              <input 
                type='text' 
                placeholder='Price Range' 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)} 
              />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1' type='submit'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
