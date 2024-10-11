import React, { useState, useEffect } from "react";
import Back from "../common/Back";
import RecentCard from "../home/recent/RecentCard";
import "../home/recent/recent.css";
import img from "../images/about.jpg";

const Blog = () => {
  const [loading, setLoading] = useState(true); // State to manage loading
  const [alertMessage, setAlertMessage] = useState(""); // State for alert message

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const handleCardClick = (title) => {
    setAlertMessage(`You clicked on "${title}"`); // Show alert message
    setTimeout(() => setAlertMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          {loading ? (
            <div className="loading">Loading blogs...</div> // Loading indicator
          ) : (
            <RecentCard onCardClick={handleCardClick} /> // Pass click handler to RecentCard
          )}
        </div>
        {alertMessage && <div className="alert">{alertMessage}</div>} {/* Alert message display */}
      </section>
    </>
  );
};

export default Blog;
