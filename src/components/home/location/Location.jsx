import React from "react";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import "./style.css";

const Location = () => {
  const handleOverlayClick = (name) => {
    alert(`You selected: ${name}`);
  };

  const styles = {
    section: {
      padding: '60px 0',
      backgroundColor: '#f7f9fc',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      opacity: 0,
      transition: 'opacity 0.3s',
    },
    box: {
      position: 'relative',
      cursor: 'pointer',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
  };

  return (
    <>
      <section className='location padding' style={styles.section}>
        <div className='container'>
          <Heading 
            title='Explore By Location' 
            subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
          />

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div 
                className='box' 
                key={index} 
                style={styles.box}
                onClick={() => handleOverlayClick(item.name)}
              >
                <img src={item.cover} alt='' style={styles.image} />
                <div className='overlay' style={styles.overlay}>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
