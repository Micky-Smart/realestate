import React, { useState } from "react";
import Heading from "../../common/Heading";
import { awards } from "../../data/Data";

const Awards = () => {
  const [tooltip, setTooltip] = useState("");

  const handleMouseEnter = (name) => {
    setTooltip(name);
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };

  const styles = {
    section: {
      padding: '60px 0',
    },
    box: {
      textAlign: 'center',
      padding: '20px',
      borderRadius: '8px',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
    },
    tooltip: {
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#333',
      color: '#fff',
      padding: '5px 10px',
      borderRadius: '5px',
      opacity: tooltip ? 1 : 0,
      transition: 'opacity 0.3s ease',
      visibility: tooltip ? 'visible' : 'hidden',
      zIndex: 10,
    },
  };

  return (
    <>
      <section className='awards' style={styles.section}>
        <div className='container'>
          <Heading title='Over 1,24,000+ Happy Users Being With Us Still They Love Our Services' subtitle='Our Awards' />

          <div className='content grid4 mtop'>
            {awards.map((val, index) => (
              <div
                className='box'
                key={index}
                onMouseEnter={() => handleMouseEnter(val.name)}
                onMouseLeave={handleMouseLeave}
                style={styles.box}
              >
                <div className='icon'>
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
                <div style={styles.tooltip}>{tooltip === val.name ? `This is the award for ${val.name}` : ""}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
