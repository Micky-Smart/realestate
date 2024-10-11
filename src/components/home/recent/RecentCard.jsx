import React from "react";
import { list } from "../../data/Data";

const RecentCard = () => {
  const handleCardClick = (name, price) => {
    alert(`You clicked on ${name} priced at ${price}!`);
  };

  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className='box shadow' key={index} onClick={() => handleCardClick(name, price)} style={{ cursor: 'pointer' }}>
              <div className='img'>
                <img src={cover} alt={name} />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>
                    {category}
                  </span>
                  <i className='fa fa-heart' />
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot' /> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label>/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
